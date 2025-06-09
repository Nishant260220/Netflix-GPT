import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE, userAvtar } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unSubscribes when component unmounts
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle Gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="" />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifer} value={lang.identifer}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 text-white px-4 py-2 m-2 mx-4 my-2 rounded-xl hover:opacity-70 "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12 px-2" src={userAvtar} alt="" />
          <button
            className="font-bold text-white text-lg bg-red-500"
            onClick={handleSignOut}
          >
            (Sign-out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
