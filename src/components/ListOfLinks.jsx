import React from "react";
import { useState, useEffect } from "react";

export const ListOfLinks = () => {
  const [urlFromAPI, setUrlFromAPI] = useState([]);

  useEffect(() => {
    fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      cors: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foo: "https://frontendmentor.io" }),
    })
      .then((res) => res.json())
      .then((data) => setUrlFromAPI(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="text-black mt-30 mb-40 w-3/4 flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-lg w-full flex flex-row items-center justify-between py-4 px-8">
        <p className="font-medium text-lg">https://frontendmentor.io</p>
        <div className="flex flex-row items-center justify-center gap-x-6">
          <p className="text-primary-cyan font-medium text-lg">
            https://rel.ink/k4lKyk
          </p>
          <button className="px-6 py-2 bg-primary-cyan rounded-lg text-white font-medium cursor-pointer">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};
