import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})

/** Shared Next.js cache options so Sanity updates appear on Vercel without redeploy */
export const sanityFetchOptions = {
  next: {
    revalidate: 60,
    tags: ['sanity'],
  },
}
