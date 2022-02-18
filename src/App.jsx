import Nav from "./components/nav/Nav"
import Welcome from "./components/welcome/Welcome";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";

import { useState } from "react";

function App() {


  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prevNav) => !prevNav);
  }

  return (
    <div className="app">

      <Nav 
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        toggleNav={toggleNav}
      />

      <div className="sections">
        <Welcome />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
