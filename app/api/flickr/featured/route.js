import { fetchFeaturedPhoto } from '@/lib/flickr';

export async function GET() {
  try {
    if (!process.env.FLICKR_API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing Flickr API key' }), { status: 500 });
    }
    const data = await fetchFeaturedPhoto('52621633176');
    return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to fetch featured photo' }), { status: 502 });
  }
}