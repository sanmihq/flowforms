"use client";

import { SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "@heroui/react";

export function SignIn() {
  return (
    <SignInButton>
      <Button>Sign In</Button>
    </SignInButton>
  );
}

export function SignUp() {
  return (
    <SignUpButton>
      <Button color="primary">Get Started</Button>
    </SignUpButton>
  );
}

export function SignOut() {
  return (
    <SignOutButton>
      <Button>Sign Out</Button>
    </SignOutButton>
  );
}
