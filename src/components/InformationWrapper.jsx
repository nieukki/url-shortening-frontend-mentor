import React from "react";
import { InformationBlocks } from "./InformationBlocks";

export const InformationWrapper = () => {
  return (
    <div className="w-3/4 mt-60 flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl text-neutral-veryDarkViolet">
          Advanced Statistics
        </h2>
        <p className="text-neutral-grayishViolet mb-30 text-center w-2/3">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <InformationBlocks />
    </div>
  );
};
