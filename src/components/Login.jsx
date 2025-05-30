import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleIsSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    const nameVal = !isSignUp ? name.current?.value : "";
    const message = validateData(
      email.current.value,
      password.current.value,
      nameVal
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // 👇 Set display name
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              console.log("Profile updated with name:", name.current.value);
            })
            .catch((error) => {
              console.error("Profile update error:", error);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-65"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-65"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-65"
        />

        {<p className="text-red-500 font-bold text-lg">{errorMessage}</p>}

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
