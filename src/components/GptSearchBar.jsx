import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="m-4 p-4 col-span-9"
        />
        <button className="text-white bg-red-500 m-4 py-2 px-4 rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
