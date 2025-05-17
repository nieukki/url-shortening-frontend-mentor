import React from "react";

export const InformationBlocks = () => {
  return (
    <div>
      <div className="flex flex-row relative mb-60">
        <div className="relative flex flex-col items-start justify-center w-1/3 bg-white rounded-lg px-8">
          <div className="absolute top-0 -translate-y-1/2 bg-primary-darkViolet p-6 rounded-full">
            <img
              src="./images/icon-brand-recognition.svg"
              alt="brand recognition icon"
            />
          </div>
          <div className="mt-20 flex flex-col items-start gap-4">
            <h3 className="font-bold text-neutral-veryDarkViolet text-2xl">
              Brand Recognition
            </h3>
            <p className="text-neutral-grayishViolet pb-8">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <section className="bg-primary-cyan w-8 h-2 absolute top-40 left-92"></section>
        <div className="absolute flex flex-col items-start justify-center w-1/3 bg-white rounded-lg px-8 top-15 left-100">
          <div className="absolute top-0 -translate-y-1/2 bg-primary-darkViolet p-6 rounded-full">
            <img
              src="./images/icon-detailed-records.svg"
              alt="brand recognition icon"
            />
          </div>
          <div className="mt-20 flex flex-col items-start gap-4">
            <h3 className="font-bold text-neutral-veryDarkViolet text-2xl">
              Detailed Records
            </h3>
            <p className="text-neutral-grayishViolet pb-8">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <section className="bg-primary-cyan w-8 h-2 absolute top-40 left-192"></section>
        <div className="absolute flex flex-col items-start justify-center w-1/3 bg-white rounded-lg px-8 top-25 left-200">
          <div className="absolute top-0 -translate-y-1/2 bg-primary-darkViolet p-6 rounded-full">
            <img
              src="./images/icon-fully-customizable.svg"
              alt="brand recognition icon"
            />
          </div>
          <div className="mt-20 flex flex-col items-start gap-4">
            <h3 className="font-bold text-neutral-veryDarkViolet text-2xl">
              Fully Customizable
            </h3>
            <p className="text-neutral-grayishViolet pb-8">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
