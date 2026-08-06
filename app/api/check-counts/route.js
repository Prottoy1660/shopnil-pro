import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';

function getClient() {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token: process.env.SANITY_API_TOKEN,
  });
}

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      return NextResponse.json(
        { error: 'Missing NEXT_PUBLIC_SANITY_PROJECT_ID' },
        { status: 500 }
      );
    }

    const client = getClient();
    const types = [
      'experience', 'education', 'skillSection', 'testimonial',
      'certification', 'project', 'hero', 'about', 'trustedBy', 'settings'
    ];

    const results = {};

    for (const type of types) {
      const count = await client.fetch(`count(*[_type == "${type}"])`);
      results[type] = count;
    }

    const projects = await client.fetch(
      `*[_type == "project"]{title, slug, _id, _createdAt}`
    );

    return NextResponse.json({
      counts: results,
      projects: {
        count: projects.length,
        items: projects.map((p) => ({
          title: p.title,
          slug: p.slug?.current,
        })),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
