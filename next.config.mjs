import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid picking the parent lockfile outside this project on Vercel/local
  outputFileTracingRoot: path.join(__dirname),
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'live.staticflickr.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ]
  }
};

export default nextConfig;
