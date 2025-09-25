// src/lib/data/appConfig.ts
import { Metadata } from "next";

export const appConfig = {
  name: "FlowForms",
  title: "FlowForms: Build forms that flow beautifully.",
  description:
    "Effortlessly create and manage beautiful forms with our minimalist, production-ready form builder.",
  url: "https://flowforms.vercel.app",
  authors: {
    name: "Sanmi Akinwunmi",
    url: "https://sanmihq.com",
  },
  keywords: [
    "form builder",
    "online forms",
    "flowforms",
    "next.js",
    "react forms",
  ],
  creator: "Sanmi Akinwunmi",
  themeColor: "#f1f5f9",
  links: {
    home: "/",
    features: "/#features",
    docs: "/docs",
    signin: "/sign-in",
    signup: "/sign-up",
    dashboard: "/dashboard",
    create: "/dashboard/create",
  },
  developer: {
    name: "Sanmi Akinwunmi",
    links: {
      github: "https://github.com/sanmihq",
      twitter: "https://x.com/sanmi_hq",
      linkedin: "https://www.linkedin.com/in/sanmihq/",
    },
  },
  ogImage: "/og-image.png",
  twitterHandle: "@sanmi_hq",
  // New dashboard-specific metadata
  dashboard: {
    title: "Dashboard",
    description: "Manage your forms and data from your FlowForms dashboard.",
  },
};

export type AppConfig = typeof appConfig;

export const generateRootMetadata = (): Metadata => ({
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
        url: `${appConfig.url}${appConfig.ogImage}`,
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
    images: [`${appConfig.url}${appConfig.ogImage}`],
    creator: appConfig.twitterHandle,
  },
});

export const generateDashboardMetadata = (): Metadata => ({
  title: {
    template: `%s | ${appConfig.dashboard.title}`,
    default: appConfig.dashboard.title,
  },
  description: appConfig.dashboard.description,
  robots: {
    index: false,
    follow: false,
  },
});
