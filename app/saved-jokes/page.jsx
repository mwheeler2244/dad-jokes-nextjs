import { saveDataJoke } from "../lib/actions";
import { db } from "../lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function saveJokes() {
  const { userId: clerkUserId } = await auth();

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: clerkUserId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Get all saved jokes for this user
    const savedJokes = await db.savedJoke.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        savedAt: "desc",
      },
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-yellow-300 to-orange-300 py-10 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-8 text-center">
            Your Saved Jokes!
          </h1>
          {savedJokes.length === 0 ? (
            <p className="text-xl text-gray-600 text-center">
              You haven't saved any jokes yet!
            </p>
          ) : (
            <ul className="space-y-6">
              {savedJokes.map((joke) => (
                <li
                  key={joke.id}
                  className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-lg text-gray-800 font-semibold">
                    {joke.joke}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching saved jokes:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-6">
        <div className="text-center text-xl text-red-600 font-bold">
          Oops! Something went wrong while loading your saved jokes. Please try
          again later.
        </div>
      </div>
    );
  }
}
