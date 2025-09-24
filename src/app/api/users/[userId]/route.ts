import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/firebase/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } },
) {
  const { userId } = await params;

  const { userId: clerkUserId } = await auth();

  if (!clerkUserId || clerkUserId !== userId) {
    return NextResponse.json(
      { message: "Unauthorized access." },
      { status: 401 },
    );
  }

  try {
    const userDocRef = db.collection("users").doc(userId);
    const doc = await userDocRef.get();

    if (!doc.exists) {
      return NextResponse.json(
        { message: "User document not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(doc.data(), { status: 200 });
  } catch (error) {
    console.error("Error fetching user data from API:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
