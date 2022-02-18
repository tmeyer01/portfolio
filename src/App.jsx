import Nav from "./components/nav/Nav"
import Welcome from "./components/welcome/Welcome";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">

      <Nav />

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
