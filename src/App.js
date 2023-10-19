import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { initializeScrollToTop } from "./Scripts/ScrollUp";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Wholesale from "./Pages/Wholesale";
import Footer from "./Components/Footer";
import Locations from "./Pages/Locations";
import Franchise from "./Pages/Franchise";
import Contact from "./Pages/Contact";
import ScrollUp from "./Components/ScrollUpButton";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="boundary top"></div>
        <div className="boundary left"></div>

        <div className="App-content">
          <header>
            <Navbar />
          </header>
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ScrollUp />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/wholesale" element={<Wholesale />}></Route>
              <Route path="/locations" element={<Locations />}></Route>
              <Route path="/franchise" element={<Franchise />}></Route>
              <Route path="/Contact-us" element={<Contact />}></Route>
            </Routes>
            <footer className="footer">
              <Footer />
            </footer>
          </motion.div>
        </div>

        <div className="boundary right"></div>
        <div className="boundary bottom"></div>
      </div>
    </Router>
  );
}

export default App;
