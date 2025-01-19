"use client";
import { saveDataJoke } from "../lib/actions";
import { useState } from "react";
import { toast } from "sonner"; // Using sonner toast library

export default function SaveJoke({ joke }) {
  const [isSaving, setIsSaving] = useState(false);

  async function handleJoke() {
    console.log("Saving joke:", joke);
    setIsSaving(true);

    try {
      const data = await saveDataJoke(joke);
      if (data) {
        toast.success("Joke saved successfully!");
      }
    } catch (error) {
      console.error("Error saving joke:", error);
      const errorMessage = error.message.includes("already saved")
        ? "You've already saved this joke!"
        : "Failed to save joke. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleJoke}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        {isSaving ? "Saving..." : "Thats a keeper!"}
      </button>
    </div>
  );
}
