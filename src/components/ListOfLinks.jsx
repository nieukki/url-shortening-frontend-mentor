import React from "react";
import { LinkTemplate } from "./LinkTemplate";
export const ListOfLinks = ({ dataArray }) => {
  return (
    <div className="mt-30 mb-50 w-3/4 flex flex-col items-center justify-center gap-y-4 max-sm:w-[85%] max-sm:mb-20">
      {dataArray.map((item, index) => (
        <LinkTemplate item={item} key={index} />
      ))}
    </div>
  );
};
