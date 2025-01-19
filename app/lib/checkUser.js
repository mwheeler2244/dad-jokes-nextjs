import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export async function CheckUser() {
  // Get the current user
  const user = await currentUser();

  if (!user) {
    // Redirect if the user is not logged in
    return null;
  }

  try {
    // Check if the user already exists in the database
    const loggedIn = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedIn) {
      return loggedIn;
    }

    // Create a new user if not found
    if (user.emailAddresses?.[0]?.emailAddress) {
      const newUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name: user.name,
          email: user.emailAddresses[0].emailAddress,
        },
      });

      return newUser;
    } else {
      throw new Error("User does not have a valid email address.");
    }
  } catch (error) {
    console.error("Error during user check or creation:", error.message);
    throw error; // Rethrow the error for further handling
  }
}
