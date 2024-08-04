import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Town Guide",
  description: "An app to...",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Ana Margarida Picoito" },
    {
      name: "Ana Margarida Picoito",
      url: "https://www.linkedin.com/in/anamargaridapicoito/",
    },
  ],
  viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
  );
}