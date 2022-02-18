import Nav from "./components/nav/Nav"
import Welcome from "./components/welcome/Welcome";
import "./app.scss";

function App() {
  return (
    <div className="app">

      <Nav />

      <div className="sections">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
