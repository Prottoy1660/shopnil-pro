import { getFeaturedPhoto } from '@/lib/cloudinary';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const public_id = searchParams.get('id') || undefined;
    const data = await getFeaturedPhoto(public_id);
    return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to fetch Cloudinary featured photo' }), { status: 500 });
  }
}