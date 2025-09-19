"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
}

export const useUserData = () => {
  const { user, isLoaded } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${user.id}`);
        if (response.status === 404) {
          console.log("User document not yet created in Firestore.");
          setUserData(null);
          setError("User document not found.");
        } else if (!response.ok) {
          throw new Error(
            "Failed to fetch user data. Status: " + response.status,
          );
        } else {
          const data = await response.json();
          setUserData(data as UserData);
          setError(null);
        }
      } catch (err: any) {
        console.error("Error fetching user data:", err);
        setError(err.message || "Error fetching user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [user, isLoaded]);

  return { userData, loading, error };
};
