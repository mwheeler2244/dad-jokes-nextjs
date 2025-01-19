import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <a href="/">Joke Generator</a>
          <a href="/saved-jokes" className="hover:text-blue-300 mx-6 text-base">
            Saved Jokes
          </a>
        </div>
        {/* 
        <nav className="hidden md:flex space-x-6">
        
        </nav> */}

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <a href="/login">
              <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">
                Login
              </button>
            </a>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
