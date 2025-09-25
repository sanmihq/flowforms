"use client";

import Link from "next/link";
import { appConfig } from "../lib/data/appConfig";
import { Button } from "@heroui/react";
import { IconWrapper } from "@/components/shared/IconWrapper";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Hello world</h1>
      <Button
        as={Link}
        href={appConfig.links.signup}
        startContent={<IconWrapper icon={Plus} />}
      >
        Get Started - It's Free
      </Button>
      <p className="uppercase">This is the landing page</p>
    </div>
  );
}
