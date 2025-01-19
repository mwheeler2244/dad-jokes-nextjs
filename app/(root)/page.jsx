import GenerateJoke from "../components/GenerateJoke";
import { currentUser } from "@clerk/nextjs/server";
import { Toaster } from "sonner";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-yellow-300 to-orange-300 flex items-center justify-center py-10 px-6">
      <div className="max-w-3xl flex flex-col items-center w-full bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-4">
            Welcome to Your Joke Generator!
          </h1>
          <p className="text-lg text-gray-700">
            Get ready to have some fun with hilarious jokes. 😄
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <GenerateJoke />
          <Toaster position="bottom-right" />
        </div>
      </div>
    </div>
  );
}
