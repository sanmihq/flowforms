import type { Metadata } from "next";
import "../globals.css";
import { fonts } from "../fonts/fonts";
import {  generateRootMetadata } from "../lib/data/appConfig";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "../providers";
import Header from "@/components/shared/Header";

export const metadata = generateRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fonts.bricolage.className} antialiased`}>
          <Providers>
            <Header />
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
