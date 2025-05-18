import React from "react";
import { useState } from "react";

export const Form = ({ handleShorten, isValidLink }) => {
  const [inputUrl, setInputUrl] = useState("");

  return (
    <form
      className="w-3/4 h-40 bg-[url('./images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-primary-darkViolet rounded-lg flex flex-row justify-around items-center gap-x-6 px-15 absolute top-0 -translate-y-1/2"
      onSubmit={(e) => {
        e.preventDefault();
        handleShorten(inputUrl);
        setInputUrl("");
      }}
    >
      <input
        type="text"
        placeholder="Shorten a link here..."
        className={`bg-white placeholder:text-neutral-grayishViolet placeholder:font-medium px-6 py-4 rounded-lg flex-1 ${
          isValidLink
            ? ""
            : "outline-3 outline-secondary-red placeholder:text-secondary-red"
        }`}
        value={inputUrl}
        onChange={(e) => {
          setInputUrl(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-white bg-primary-cyan py-4 px-8 rounded-lg font-medium cursor-pointer"
      >
        Shorten it!
      </button>
      <i
        className={`absolute left-15 bottom-5 text-secondary-red ${
          isValidLink ? "hidden" : "visible"
        }`}
      >
        Please add a link
      </i>
    </form>
  );
};
