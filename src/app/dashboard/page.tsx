"use client";

import { useUserData } from "@/hooks/useUserData";

export default function DashboardPage() {
  const { userData, loading, error } = useUserData();

  if (loading) {
    return <div className="p-8">Loading user data...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-500">Error: {error}</div>;
  }

  if (!userData) {
    return <div className="p-8">No user data found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">
        Welcome, {userData.firstName}! 👋
      </h1>
      <p className="mb-2">Your email is: {userData.email}</p>
      <div className="h-24 w-24 overflow-hidden rounded-full">
        {userData.profilePicture && (
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        This data is synced from Clerk to Firestore via a webhook.
      </p>
    </div>
  );
}
