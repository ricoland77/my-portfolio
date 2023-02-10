import "./App.css";

// Navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import de mes pages
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MenuBurger from "./components/MenuBurger";
import Presentation from "./pages/Presentation";
import Project from "./pages/Project";

// States
import { useState } from "react";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {displayMenu && <MenuBurger setDisplayMenu={setDisplayMenu} />}
      </Router>
    </div>
  );
}

export default App;
