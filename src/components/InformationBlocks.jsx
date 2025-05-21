export const InformationBlocks = () => {
  return (
    <div className="w-full py-16 mb-30 max-info:mt-10">
      <div className="flex flex-row relative items-center justify-center gap-6 max-sm:flex-col max-info:flex-col">
        <div className="absolute h-2 bg-primary-cyan w-3/5 top-40 left-1/4 max-sm:w-2 max-sm:h-4/5 max-sm:left-[49%] max-info:w-2 max-info:h-4/5 max-info:left-[49%]"></div>
        {/* block 1*/}
        <div className="relative flex flex-col items-start justify-center w-1/3 bg-white rounded-lg px-8 shadow-md z-10 max-sm:w-full max-sm:items-center max-info:w-full max-info:items-center">
          <div className="absolute top-0 -translate-y-1/2 bg-primary-darkViolet p-6 rounded-full">
            <img
              src="./images/icon-brand-recognition.svg"
              alt="brand recognition icon"
            />
          </div>
          <div className="mt-20 flex flex-col items-start gap-4 max-sm:items-center max-info:items-center">
            <h3 className="font-bold text-neutral-veryDarkViolet text-2xl">
              Brand Recognition
            </h3>
            <p className="text-neutral-grayishViolet pb-8 max-sm:text-center max-info:text-center">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        {/* block 2*/}
        <div className="relative flex flex-col items-start justify-center w-1/3 bg-white rounded-lg px-8 shadow-md z-10 mt-16 max-sm:w-full max-sm:items-center max-info:w-full max-info:items-center">
          <div className="absolute top-0 -translate-y-1/2 bg-primary-darkViolet p-6 rounded-full">
            <img
              src="./images/icon-detailed-records.svg"
              alt="detailed records icon"
            />
          </div>
          <div className="mt-20 flex flex-col items-start gap-4 max-sm:items-center max-info:items-center">
            <h3 className="font-bold text-neutral-veryDarkViolet text-2xl">
              Detailed Records
            </h3>
            <p className="text-neutral-grayishViolet pb-8 max-sm:text-center max-info:text-center">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        {/* block 3*/}
        <div className="relative flex flex-col items-start justify-center w-1/3 bg-white rounded-lg px-8 shadow-md z-10 mt-32 max-sm:w-full max-sm:items-center max-sm:mt-16 max-info:mt-16 max-info:w-full max-info:items-center">
          <div className="absolute top-0 -translate-y-1/2 bg-primary-darkViolet p-6 rounded-full">
            <img
              src="./images/icon-fully-customizable.svg"
              alt="fully customizable icon"
            />
          </div>
          <div className="mt-20 flex flex-col items-start gap-4 max-sm:items-center max-info:items-center">
            <h3 className="font-bold text-neutral-veryDarkViolet text-2xl">
              Fully Customizable
            </h3>
            <p className="text-neutral-grayishViolet pb-8 max-sm:text-center max-info:text-center">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
