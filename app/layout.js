import "@/styles/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";

import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "Home || Shopnil Mahamud",
  description: "UX/UI Designer & Developer creating beautiful and functional digital experiences. Explore my portfolio of innovative design solutions and development projects.",
  keywords: "UX Designer, UI Designer, Web Developer, Portfolio, Digital Design, User Experience, User Interface, Frontend Development",
  authors: [{ name: "Shopnil Mahamud" }],
  creator: "Shopnil Mahamud",
  publisher: "Shopnil Mahamud",
  
  // Open Graph meta tags for Facebook, LinkedIn, etc.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shopnilmahamud.com',
    siteName: 'Shopnil Mahamud - Portfolio',
    title: 'Shopnil Mahamud - UX/UI Designer & Developer',
    description: 'UX/UI Designer & Developer creating beautiful and functional digital experiences. Explore my portfolio of innovative design solutions and development projects.',
    images: [
      {
        url: '/assets/images/social-preview.svg',
        width: 1200,
        height: 630,
        alt: 'Shopnil Mahamud - UX/UI Designer & Developer Portfolio',
        type: 'image/svg+xml',
      }
    ],
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    site: '@shopnilmahamud',
    creator: '@shopnilmahamud',
    title: 'Shopnil Mahamud - UX/UI Designer & Developer',
    description: 'UX/UI Designer & Developer creating beautiful and functional digital experiences. Explore my portfolio of innovative design solutions.',
    images: ['/assets/images/social-preview.svg'],
  },
  
  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/assets/images/favicon.ico', sizes: 'any' },
      { url: '/assets/images/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/assets/images/favicon.ico',
    apple: '/assets/images/favicon.ico',
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/images/favicon.svg',
      },
    ],
  },
  manifest: '/assets/images/favicon.ico',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>

      <body>
        <LayoutWrapper>
          <ToastContainer
            position="bottom-left"
            // autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
