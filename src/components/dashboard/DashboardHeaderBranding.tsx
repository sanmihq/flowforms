import Link from "next/link";
import { NavbarBrand, NavbarContent } from "@heroui/react";
import { appConfig } from "@/app/lib/data/appConfig";

export default function DashboardHeaderBranding() {
  return (
    <NavbarContent justify="start">
      <NavbarBrand>
        <Link
          href={appConfig.links.dashboard}
          className="text-lg font-bold md:text-xl"
        >
          {appConfig.name}
        </Link>
        <span className="ml-2 hidden text-gray-400 md:inline">/</span>
        <h1 className="ml-2 hidden text-lg font-medium text-gray-600 md:inline">
          Untitled Form
        </h1>
      </NavbarBrand>
    </NavbarContent>
  );
}
