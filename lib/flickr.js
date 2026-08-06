const API_ENDPOINT = 'https://api.flickr.com/services/rest/';
const apiKey = process.env.FLICKR_API_KEY;
const userId = process.env.FLICKR_USER_ID || '195357099@N04';
const ttl = Number(process.env.FLICKR_REVALIDATE_SECONDS || '86400');

const cache = globalThis.__flickrCache || (globalThis.__flickrCache = new Map());

async function flickrRequest(params) {
  if (!apiKey) throw new Error('Missing Flickr API key');
  const qs = new URLSearchParams({
    api_key: apiKey,
    format: 'json',
    nojsoncallback: '1',
    ...params,
  }).toString();
  const res = await fetch(`${API_ENDPOINT}?${qs}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Flickr request failed');
  const json = await res.json();
  return json;
}

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > ttl * 1000) return null;
  return entry.data;
}

function setCached(key, data) {
  cache.set(key, { data, ts: Date.now() });
}

export async function fetchPublicPhotos() {
  const key = `publicPhotos:${userId}`;
  const cached = getCached(key);
  if (cached) return cached;
  const extras = 'url_q,url_m,url_c,url_l,url_o,tags,owner_name,description,date_upload';
  const json = await flickrRequest({ method: 'flickr.people.getPublicPhotos', user_id: userId, extras });
  const photos = (json.photos?.photo || []).map(p => {
    const src = p.url_l || p.url_c || p.url_m || '';
    const thumb = p.url_q || p.url_m || src;
    const tags = typeof p.tags === 'string' && p.tags.length ? p.tags.split(' ') : [];
    return { id: p.id, title: p.title || '', src, thumb, alt: p.title || `Photo ${p.id}`, tags };
  }).filter(p => p.src);
  const payload = { photos, updatedAt: Date.now() };
  setCached(key, payload);
  return payload;
}

export async function fetchFeaturedPhoto(featureId = '52621633176') {
  const key = `featured:${featureId}`;
  const cached = getCached(key);
  if (cached) return cached;
  const sizesJson = await flickrRequest({ method: 'flickr.photos.getSizes', photo_id: featureId });
  const sizes = sizesJson.sizes?.size || [];
  const pick = sizes[sizes.length - 1] || sizes.find(s => s.label === 'Large') || sizes[0];
  const src = pick?.source || '';
  const photo = { id: featureId, src, alt: `Featured ${featureId}` };
  const payload = { photo, updatedAt: Date.now() };
  setCached(key, payload);
  return payload;
}