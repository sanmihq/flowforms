"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Skeleton,
} from "@heroui/react";
import { Linkedin, Twitter } from "lucide-react";
import { appConfig } from "@/app/lib/data/appConfig";
import { IconWrapper } from "./IconWrapper";
import { SignIn, SignOut, SignUp } from "./AuthButtons";

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <Navbar maxWidth="full">
      {/* Left section: App name only */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href={appConfig.links.home} className="text-xl font-bold">
            {appConfig.name}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Right section: Developer icons and Auth buttons */}
      <NavbarContent justify="end">
        {/* Developer Icons */}
        <NavbarItem className="mr-4 flex items-center gap-2">
          <Button
            as={Link}
            isIconOnly
            size="sm"
            variant="light"
            href={appConfig.developer.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper icon={Linkedin} />
          </Button>
          <Button
            as={Link}
            isIconOnly
            size="sm"
            variant="light"
            href={appConfig.developer.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper icon={Twitter} />
          </Button>
        </NavbarItem>

        {/* Auth Buttons with Skeletons */}
        {isSignedIn ? (
          <NavbarItem>
            <Skeleton isLoaded={isLoaded} className="rounded-md-xl">
              <SignOut />
            </Skeleton>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem>
              <Skeleton isLoaded={isLoaded} className="rounded-xl">
                <SignUp />
              </Skeleton>
            </NavbarItem>
            <NavbarItem>
              <Skeleton isLoaded={isLoaded} className="rounded-xl">
                <SignIn />
              </Skeleton>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
