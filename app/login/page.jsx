import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 max-w-md w-full">
        <SignedOut>
          <SignIn routing="hash" redirectUrl="/" />{" "}
          {/* Added routing="hash" and redirectUrl */}
        </SignedOut>
        <SignedIn>
          <RedirectToSignIn redirectUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
}
