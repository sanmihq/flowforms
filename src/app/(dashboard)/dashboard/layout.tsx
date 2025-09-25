import { fonts } from "@/app/fonts/fonts";
import "../../globals.css";
import { Providers } from "@/app/providers";
import { ClerkProvider } from "@clerk/nextjs";
import { generateDashboardMetadata } from "@/app/lib/data/appConfig";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export const metadata = generateDashboardMetadata();

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` ${fonts.bricolage.className} antialiased`}>
          <Providers>
            <DashboardHeader />
            <main className="p-6">
              {children}
              <p>This is the dashboard layout</p>
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
