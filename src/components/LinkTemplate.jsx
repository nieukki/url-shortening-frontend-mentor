import { useState } from "react";

export const LinkTemplate = ({ item }) => {
  const handleCopyURL = (url) => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
  };
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="bg-white rounded-lg w-full flex flex-row items-center justify-between py-4 px-8 max-sm:flex-col max-sm:items-start max-sm:p-0 ">
      <p className="font-medium text-lg text-neutral-veryDarkViolet max-sm:w-full max-sm:py-3 max-sm:px-4">
        {item.originalURL}
      </p>
      <div
        className="max-sm:border-1 max-sm:border-neutral-gray max-sm:opacity-30 max-sm:w-full"
        aria-label="false"></div>
      <div className="flex flex-row items-center justify-center gap-x-6 max-sm:flex-col max-sm:py-3 max-sm:px-4 max-sm:gap-y-4 max-sm:w-full max-sm:items-start">
        <p className="text-primary-cyan font-medium text-lg">
          {item.shortenedURL}
        </p>
        <button
          onClick={() => {
            handleCopyURL(item.shortenedURL);
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          }}
          className={`w-[100px] transition-all duration-200 flex flex-row items-center justify-center px-6 py-2 w rounded-lg text-white font-medium cursor-pointer  ${
            !isCopied ? "bg-primary-cyan" : "bg-primary-darkViolet"
          } max-sm:w-full`}
          disabled={isCopied}>
          {!isCopied ? "Copy" : "Copied!"}
        </button>
      </div>
    </div>
  );
};
