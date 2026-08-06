import { listPhotos } from '@/lib/cloudinary';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get('folder') || '';
    const cursor = searchParams.get('cursor') || undefined;
    const data = await listPhotos({ folder, next_cursor: cursor });
    return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to list Cloudinary photos' }), { status: 500 });
  }
}