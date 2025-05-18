import React from "react";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Form } from "./components/Form.jsx";
import { ListOfLinks } from "./components/ListOfLinks.jsx";
import { InformationWrapper } from "./components/InformationWrapper.jsx";
import { Boost } from "./components/Boost.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const handleShorten = (url) => {
    fetch(`https://is.gd/create.php?format=json&url=${url}`)
      .then((res) => res.json())
      .then((data) =>
        setDataArray([
          ...dataArray,
          { originalURL: url, shortenedURL: data.shorturl },
        ])
      )
      .catch((error) => console.error("Error fetching shortened URL:", error));
  };
  console.log(dataArray);
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins overflow-x-hidden">
      <Header />
      <Navbar />
      <main className="mt-60 bg-main-background w-full flex flex-col items-center justify-center relative">
        <Form handleShorten={handleShorten} />
        <ListOfLinks dataArray={dataArray} />
        <InformationWrapper />
      </main>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
