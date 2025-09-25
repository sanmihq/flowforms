"use client";

import { useUser } from "@clerk/nextjs";
import { Navbar, NavbarMenu } from "@heroui/react";
import { Component, MessageSquareQuote, Wrench } from "lucide-react";
import { useState } from "react";

import DashboardHeaderBranding from "./DashboardHeaderBranding";
import DashboardHeaderActions from "./DashboardHeaderActions";
import DashboardDesktopTabs from "./DashboardDesktopTabs";
import DashboardMobileTabs from "./DashboardMobileTabs";
import { IconWrapper } from "../shared/IconWrapper";

const TABS_CONFIG = [
  {
    key: "builder",
    title: "Builder",
    icon: <IconWrapper icon={Component} />,
  },
  {
    key: "responses",
    title: "Responses",
    icon: <IconWrapper icon={MessageSquareQuote} />,
  },
  {
    key: "settings",
    title: "Settings",
    icon: <IconWrapper icon={Wrench} />,
  },
];

export default function DashboardHeader() {
  const { isLoaded } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
        <DashboardHeaderBranding />
        <DashboardDesktopTabs tabs={TABS_CONFIG} />
        <DashboardHeaderActions isMenuOpen={isMenuOpen} isLoaded={isLoaded} />
        <NavbarMenu>{/* Content remains empty */}</NavbarMenu>
      </Navbar>
      <DashboardMobileTabs tabs={TABS_CONFIG} />
    </>
  );
}
