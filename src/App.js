import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Wholesale from "./Pages/Wholesale";
import Footer from "./Components/Footer";
import Locations from "./Pages/Locations";
import Franchise from "./Pages/Franchise";

function App() {
  return (
    <Router>
      <div className="App">
        <span className="boundary top"></span>
        <span className="boundary left"></span>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/wholesale" element={<Wholesale />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/franchise" element={<Franchise />}></Route>
        </Routes>

        <span className="boundary right"></span>
        <span className="boundary bottom"></span>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
