export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-20'

// Fallbacks keep `next build` from crashing when env vars are missing
// (e.g. Vercel without configured Sanity keys). Real values must still
// be set in Vercel for content to load in production.
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'unconfigured'

export const useCdn = false
