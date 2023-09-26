import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <span className="boundary top"></span>
      <span className="boundary left"></span>

      <Home />
      <span className="boundary right"></span>
      <span className="boundary bottom"></span>
    </div>
  );
}

export default App;
