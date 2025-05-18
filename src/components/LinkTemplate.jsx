import React from "react";

export const LinkTemplate = ({ item }) => {
  return (
    <div className="bg-white rounded-lg w-full flex flex-row items-center justify-between py-4 px-8">
      <p className="font-medium text-lg text-black">{item.originalURL}</p>
      <div className="flex flex-row items-center justify-center gap-x-6">
        <p className="text-primary-cyan font-medium text-lg">
          {item.shortenedURL}
        </p>
        <button className="px-6 py-2 bg-primary-cyan rounded-lg text-white font-medium cursor-pointer">
          Copy
        </button>
      </div>
    </div>
  );
};
