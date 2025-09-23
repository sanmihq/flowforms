import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts/fonts";
import { appConfig } from "./lib/data/appConfig";

export const metadata: Metadata = {
  title: {
    default: appConfig.title,
    template: `%s | ${appConfig.name}`,
  },
  description: appConfig.description,
  keywords: appConfig.keywords,
  authors: [{ name: appConfig.authors.name, url: appConfig.authors.url }],
  creator: appConfig.creator,
  themeColor: appConfig.themeColor,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appConfig.url,
    title: appConfig.title,
    description: appConfig.description,
    siteName: appConfig.name,
    images: [
      {
        url: `${appConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: appConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.title,
    description: appConfig.description,
    images: [`${appConfig.url}/og-image.png`],
    creator: `@${appConfig.developer.links.twitter.split("/").pop()}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.geist.className} antialiased`}>{children}</body>
    </html>
  );
}
