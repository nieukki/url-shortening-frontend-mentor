import "./App.css";
import { Header } from "./components/Header.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Form } from "./components/Form.jsx";
import { ListOfLinks } from "./components/ListOfLinks.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
