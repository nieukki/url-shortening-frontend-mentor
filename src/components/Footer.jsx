import React from "react";

export const Footer = () => {
  const socialMediaData = [
    {
      id: 1,
      link: "https://facebook.com",
      iconPath: "./images/icon-facebook.svg",
      altDescription: "facebook icon",
    },
    {
      id: 2,
      link: "https://twitter.com",
      iconPath: "./images/icon-twitter.svg",
      altDescription: "twitter icon",
    },
    {
      id: 3,
      link: "https://pinterest.com",
      iconPath: "./images/icon-pinterest.svg",
      altDescription: "pinterest icon",
    },
    {
      id: 4,
      link: "https://instagram.com",
      iconPath: "./images/icon-instagram.svg",
      altDescription: "instagram icon",
    },
  ];

  return (
    <footer className="w-full h-80  bg-neutral-veryDarkViolet flex flex-row items-center justify-around py-10 max-sm:flex-col max-sm:h-auto">
      {/*logo div*/}
      <div className="h-full flex flex-row items-start justify-center max-sm:mb-10">
        <img
          src="./images/logo.svg"
          className="filter invert"
          alt="logo of website"
        />
      </div>

      <div className="h-full flex flex-row items-start justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:h-auto">
        <div className="max-sm:text-center">
          <p className="font-medium mb-8 text-white">Features</p>
          <ul className="text-neutral-gray flex flex-col items-start gap-2 max-sm:items-center">
            <li className="hover:text-primary-cyan cursor-pointer">
              Link Shortening
            </li>
            <li className="hover:text-primary-cyan cursor-pointer">
              Branded Links
            </li>
            <li className="hover:text-primary-cyan cursor-pointer">
              Analytics
            </li>
          </ul>
        </div>
        <div className="max-sm:text-center">
          <p className="font-medium mb-8 text-white">Resources</p>
          <ul className="text-neutral-gray flex flex-col items-start gap-2 max-sm:items-center">
            <li className="hover:text-primary-cyan cursor-pointer">Blog</li>
            <li className="hover:text-primary-cyan cursor-pointer">
              Developers
            </li>
            <li className="hover:text-primary-cyan cursor-pointer">Support</li>
          </ul>
        </div>
        <div className="max-sm:text-center">
          <p className="font-medium mb-8 text-white">Company</p>
          <ul className="text-neutral-gray flex flex-col items-start gap-2 max-sm:items-center">
            <li className="hover:text-primary-cyan cursor-pointer">About</li>
            <li className="hover:text-primary-cyan cursor-pointer">Our team</li>
            <li className="hover:text-primary-cyan cursor-pointer">Careers</li>
            <li className="hover:text-primary-cyan cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="h-full flex flex-row items-start justify-center gap-x-6 max-sm:mt-10">
        {socialMediaData.map((object) => (
          <a key={object.id} href={object.link}>
            <img src={object.iconPath} alt={object.altDescription} />
          </a>
        ))}
      </div>
    </footer>
  );
};
