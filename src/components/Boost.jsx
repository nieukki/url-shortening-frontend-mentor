import React from "react";

export const Boost = () => {
  return (
    <div className="w-full h-75 bg-[url('./images/bg-boost-desktop.svg')] bg-cover bg-no-repeat bg-primary-darkViolet flex flex-col items-center justify-center gap-8 max-sm:bg-[url('./images/bg-boost-mobile.svg')]">
      <h4 className="text-white font-semibold text-5xl max-sm:text-3xl">
        Boost your links today
      </h4>
      <button className="bg-primary-cyan font-bold text-white rounded-full py-4 px-10 text-lg cursor-pointer max-sm:px-14">
        Get Started
      </button>
    </div>
  );
};
