import React from "react";
import { Header } from "./components/Header.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Form } from "./components/Form.jsx";
import { ListOfLinks } from "./components/ListOfLinks.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center font-poppins overflow-x-hidden">
      <Header />
      <Navbar />
      <main>
        <Form />
        <ListOfLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
