"use client";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const user = useUser();
  const username = user?.user?.username || "guest";
  return (
    <div className="flex h-screen items-center justify-center">
      Welcome {username}
      <br />
      This is the dashboard page
    </div>
  );
}
