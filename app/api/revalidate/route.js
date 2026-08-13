import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * On-demand revalidation for Sanity updates.
 * Call: GET /api/revalidate?secret=YOUR_SECRET
 * Optional: set REVALIDATE_SECRET in Vercel (defaults below for convenience).
 */
export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');
  const expected = process.env.REVALIDATE_SECRET || 'shopnil_revalidate_secret';

  if (secret !== expected) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidateTag('sanity');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
