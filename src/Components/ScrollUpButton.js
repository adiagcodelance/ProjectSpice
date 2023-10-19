import "./ScrollUp.css";
import { motion } from "framer-motion";
import { initializeScrollToTop } from "../Scripts/ScrollUp";

const ScrollUp = () => {
  initializeScrollToTop();
  return (
    <div id="scroll-to-top-button">
      <a href="#" class="scroll-to-top-link" id="scroll-up">
        ^
      </a>
      <script src="scrollToTop.js"></script>
    </div>
  );
};

export default ScrollUp;
