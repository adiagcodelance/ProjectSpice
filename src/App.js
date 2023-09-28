import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <span className="boundary top"></span>
        <span className="boundary left"></span>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>

        <span className="boundary right"></span>
        <span className="boundary bottom"></span>
      </div>
    </Router>
  );
}

export default App;
