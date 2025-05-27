import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleIsSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt=""
        />
      </div>

      <form
        action=""
        className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignUp && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-65"
          />
        )}

        <input
          type="text"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-65"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-65"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleIsSignUp}>
          {isSignUp
            ? "New to Netflix? Sign-Up now"
            : "Already a member?Sign-In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
