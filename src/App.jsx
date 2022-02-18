import Nav from "./components/nav/Nav"
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div className="App">

      <Nav />
      
      <div className="sections">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
