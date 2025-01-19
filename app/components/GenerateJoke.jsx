"use client";
import { FetchJokes } from "../lib/actions";
import { useState } from "react";
import SaveJoke from "./SaveJoke";

export default function GenerateJoke() {
  const [joke, setJoke] = useState("");

  async function handleClick() {
    const res = await FetchJokes();
    setJoke(res.joke);
  }

  return (
    <div className="w-full">
      <div className="max-w-lg w-full text-center bg-white  p-6">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          {joke || "Click the button to generate a joke!"}
        </h2>
        <div className="flex justify-center gap-5 mt-10  ">
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 "
          >
            Get Joke
          </button>
          {joke && <SaveJoke joke={joke} />}
        </div>
      </div>
    </div>
  );
}
