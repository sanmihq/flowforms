import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { appConfig } from "@/lib/data/appConfig";

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fonts.bricolage.className} antialiased`}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
