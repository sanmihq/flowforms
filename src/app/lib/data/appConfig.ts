export const appConfig = {
  name: "FlowForms",
  title: "FlowForms: Build forms that flow beautifully.",
  description:
    "Effortlessly create and manage beautiful forms with our minimalist, production-ready form builder.",
  url: "https://flowforms.vercel.app", // Use your actual domain
  authors: {
    name: "Sanmi Akinwunmi",
    url: "https://sanmihq.com", // Your personal website
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
    login: "/sign-in",
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
};

export type AppConfig = typeof appConfig;
