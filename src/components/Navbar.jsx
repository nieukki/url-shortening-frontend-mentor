export const Navbar = () => {
  return (
    <nav className="w-3/4 flex flex-row items-center mt-30">
      <div>
        <h1 className="text-neutral-veryDarkBlue font-bold text-7xl leading-tight">
          More than just shorter links
        </h1>
        <p className="font-medium text-neutral-grayishViolet">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white font-semibold bg-primary-cyan text-lg py-2 px-8 rounded-full cursor-pointer mt-10">
          Get Started
        </button>
      </div>
      <div className="w-full h-full flex flex-row items-center relative">
        <img
          src="./images/illustration-working.svg"
          alt="person sitting on chair in front of desk where is monitor"
          className="absolute left-70 w-[700px] h-auto object-contain max-w-none"
        />
      </div>
    </nav>
  );
};
