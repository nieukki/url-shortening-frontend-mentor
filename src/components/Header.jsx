import React from "react";

export const Header = () => {
  return (
    <header className="w-3/4 flex flex-row justify-between text-neutral-grayishViolet font-semibold py-10">
      <div className="flex flex-row items-center gap-x-12">
        <img src="./images/logo.svg" alt="logo of website" />
        <ul className="flex flex-row gap-x-8">
          <li className="cursor-pointer hover:text-neutral-veryDarkViolet transition-all duration-200">
            Features
          </li>
          <li className="cursor-pointer hover:text-neutral-veryDarkViolet transition-all duration-200">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-neutral-veryDarkViolet transition-all duration-200">
            Resources
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-x-10">
        <button className="cursor-pointer ">Login</button>
        <button className="cursor-pointer bg-primary-cyan text-white px-6 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </header>
  );
};
