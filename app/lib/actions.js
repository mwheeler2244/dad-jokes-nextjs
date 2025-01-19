"use server";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function FetchJokes() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();

  return data;
}
export async function saveDataJoke(joke) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User is not authenticated");
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      throw new Error("User not found in database");
    }

    const jokeData = await db.savedJoke.create({
      data: {
        joke,
        userId: user.id,
      },
    });

    return jokeData;
  } catch (error) {
    if (error.message.includes("Unique constraint")) {
      throw new Error("You've already saved this joke!");
    }
  }
}
