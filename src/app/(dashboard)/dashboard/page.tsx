"use client";

import { useUserData } from "@/hooks/useUserData";

export default function page() {
  const { userData } = useUserData();
  return (
    <div>
      <p className="mb-1">Welcome, {userData?.firstName || "User"}! 👋</p>
    </div>
  );
}
