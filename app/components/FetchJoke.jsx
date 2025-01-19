"use client";
import { FetchJokes } from "../lib/actions";
import { useState } from "react";
import React from "react";

export default function FetchJoke() {
  const [joke, setJoke] = useState("");

  async function handleClick() {
    const res = await FetchJokes();
    setJoke(res.joke);
  }
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div className="max-w-lg w-full text-center  bg-white  shadow-xl rounded-lg p-6">
        <p className="text-lg font-medium text-gray-800 mb-4">
          {joke || "Click the button to generate a joke!"}
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Get Joke
        </button>
      </div>
    </div>
  );
}
