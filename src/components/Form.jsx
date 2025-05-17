import React from "react";

export const Form = () => {
  return (
    <form className="w-3/4 h-40 bg-[url('./images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-primary-darkViolet rounded-lg flex flex-row justify-around items-center gap-x-6 px-15 absolute top-0 -translate-y-1/2">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="bg-white placeholder:text-neutral-grayishViolet placeholder:font-medium px-6 py-4 rounded-lg flex-1"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="text-white bg-primary-cyan py-4 px-8 rounded-lg font-medium cursor-pointer"
      >
        Shorten it!
      </button>
    </form>
  );
};
