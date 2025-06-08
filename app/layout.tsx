import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uniix's blog",
  description:
    "Nothing here",
  openGraph: {
    title: "Uniix's blog",
    description:
      "Nothing here",
    url: "https://blog.uniix.dev",
    siteName: "Uniix's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LonerXie",
    creator: "@LonerXie",
  },
  metadataBase: new URL("https://blog.uniix.dev"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
