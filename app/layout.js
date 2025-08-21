import "@/styles/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";

import { ToastContainer } from "react-toastify";
export const metadata = {
  title:
    "Home || Shopnil Mahamud",
  description:
    "Shopnil Mahamud",
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
