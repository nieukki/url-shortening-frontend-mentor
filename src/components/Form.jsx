import React from "react";
import { useState } from "react";

export const Form = ({ handleShorten, isValidLink }) => {
  const [inputUrl, setInputUrl] = useState("");

  return (
    <form
      className="w-3/4 h-40 bg-[url('./images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-primary-darkViolet rounded-lg flex flex-row justify-around items-center gap-x-6 px-15 absolute top-0 -translate-y-1/2 max-sm:bg-[url('./images/bg-shorten-mobile.svg')] max-sm:flex-col max-sm:w-[85%] max-sm:px-0 max-sm:h-50"
      onSubmit={(e) => {
        e.preventDefault();
        handleShorten(inputUrl);
        setInputUrl("");
      }}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        className={`bg-white placeholder:text-neutral-grayishViolet placeholder:font-medium px-6 py-4 rounded-lg flex-1 ${
          isValidLink
            ? ""
            : "outline-3 outline-secondary-red placeholder:text-secondary-red"
        } max-sm:flex-0 max-sm:w-4/5`}
        value={inputUrl}
        onChange={(e) => {
          setInputUrl(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-white bg-primary-cyan py-4 px-8 rounded-lg font-medium cursor-pointer max-sm:font-bold max-sm:text-xl max-sm:w-4/5">
        Shorten It!
      </button>
      <i
        className={`absolute left-15 bottom-5 text-secondary-red ${
          isValidLink ? "hidden" : "visible"
        } max-sm:bottom-2 max-sm:left-7`}>
        Please add a link
      </i>
    </form>
  );
};
