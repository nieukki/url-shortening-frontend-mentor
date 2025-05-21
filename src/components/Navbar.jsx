export const Navbar = () => {
  return (
    <nav className="w-3/4 flex flex-row justify-between max-sm:flex-col-reverse max-tablet:flex-col-reverse">
      <div className="w-full flex flex-col items-start justify-center max-sm:text-center max-tablet:text-center">
        <h1 className="text-neutral-veryDarkBlue font-bold text-6xl leading-tight max-sm:text-4xl">
          More than just shorter links
        </h1>
        <p className="font-medium text-neutral-grayishViolet mt-4 text-lg">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white font-semibold bg-primary-cyan text-lg py-4 px-12 rounded-full cursor-pointer mt-10 max-sm:mx-auto max-tablet:mx-auto">
          Get Started
        </button>
      </div>

      <div className="w-full relative">
        <img
          src="/images/illustration-working.svg"
          alt="Person working at desk with computer"
          className="w-max absolute left-60 max-sm:static max-sm:mb-10 max-tablet:static max-tablet:mb-20"
        />
      </div>
    </nav>
  );
};
