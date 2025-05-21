import { InformationBlocks } from "./InformationBlocks";

export const InformationWrapper = () => {
  return (
    <div className="w-3/4 flex flex-col items-center justify-center max-sm:w-[85%]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-4xl text-neutral-veryDarkBlue max-sm:text-3xl">
          Advanced Statistics
        </h2>
        <p className="text-neutral-grayishViolet mb-0 text-center w-2/3 max-sm:w-full">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <InformationBlocks />
    </div>
  );
};
