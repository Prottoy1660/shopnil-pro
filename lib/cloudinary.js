import { v2 as cloudinary } from 'cloudinary';

const cache = globalThis.__cloudinaryCache || (globalThis.__cloudinaryCache = new Map());
const ttl = Number(process.env.CLOUDINARY_REVALIDATE_SECONDS || '86400');

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > ttl * 1000) return null;
  return entry.data;
}

function setCached(key, data) {
  cache.set(key, { data, ts: Date.now() });
}

export function ensureCloudinaryConfig() {
  const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
  const api_key = process.env.CLOUDINARY_API_KEY;
  const api_secret = process.env.CLOUDINARY_API_SECRET;
  if (!cloud_name || !api_key || !api_secret) throw new Error('Missing Cloudinary credentials');
  cloudinary.config({ cloud_name, api_key, api_secret });
}

export async function listPhotos({ folder = '', max_results = 50, next_cursor } = {}) {
  ensureCloudinaryConfig();
  const key = `list:${folder}:${max_results}:${next_cursor || ''}`;
  const cached = getCached(key);
  if (cached) return cached;
  const resp = await cloudinary.api.resources({ type: 'upload', resource_type: 'image', prefix: folder, max_results, next_cursor });
  const photos = (resp.resources || []).map(r => {
    const id = r.public_id;
    const src = cloudinary.url(id, { secure: true, transformation: [{ width: 1600, crop: 'fit' }] });
    const thumb = cloudinary.url(id, { secure: true, transformation: [{ width: 600, aspect_ratio: '4:3', crop: 'fill' }] });
    const raw = cloudinary.url(id, { secure: true });
    return { id, title: r.filename || id, src, thumb, raw, alt: r.context?.custom?.alt || r.public_id, tags: r.tags || [], folder: r.folder || '', createdAt: r.created_at, width: r.width, height: r.height };
  });
  const payload = { photos, nextCursor: resp.next_cursor || null, updatedAt: Date.now() };
  setCached(key, payload);
  return payload;
}

export async function getFeaturedPhoto(public_id) {
  ensureCloudinaryConfig();
  const id = public_id || process.env.CLOUDINARY_FEATURED_ID;
  const key = `featured:${id}`;
  const cached = getCached(key);
  if (cached) return cached;
  if (!id) {
    const list = await listPhotos({ max_results: 1 });
    const first = list.photos[0];
    const payload = { photo: first, updatedAt: Date.now() };
    setCached(key, payload);
    return payload;
  }
  const src = cloudinary.url(id, { secure: true, transformation: [{ width: 2000, crop: 'fit' }] });
  const photo = { id, src, alt: `Featured ${id}` };
  const payload = { photo, updatedAt: Date.now() };
  setCached(key, payload);
  return payload;
}