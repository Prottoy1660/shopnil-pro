import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});

export async function GET() {
  try {
    const types = [
      'experience', 'education', 'skillSection', 'testimonial', 
      'certification', 'project', 'hero', 'about', 'trustedBy', 'settings'
    ];
    
    const results = {};
    
    for (const type of types) {
      const count = await client.fetch(`count(*[_type == "${type}"])`);
      results[type] = count;
    }
    
    // Get project titles and slugs to check for duplicates specifically
    const projects = await client.fetch(`*[_type == "project"]{title, slug, _id, _createdAt}`);
    
    return NextResponse.json({ 
      counts: results,
      projects: {
        count: projects.length,
        items: projects.map(p => ({ title: p.title, slug: p.slug?.current }))
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
