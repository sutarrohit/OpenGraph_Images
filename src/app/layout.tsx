import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My Awesome Blog",
    template: "%s - My Awesome Blog",
  },
  description: "Come and read my awesome articles!",

  openGraph: {
    title: "My Awesome Blog",
    description: "Come and read my awesome articles!",
    images: [
      {
        url: `https://og-meta-images.vercel.app/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "meta image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `https://og-meta-images.vercel.app/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "meta image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
