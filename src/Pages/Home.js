import Footer from "../Components/Footer";
import HeroComponent from "../Components/HeroComponents";
import Navbar from "../Components/Navbar";
import ReverseHeroComp from "../Components/ReverHeroComp";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <title>Home - Project Spice</title>
      <div className="spacer"></div>

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
        <header> {/* Your header content here */}</header>
        <section id="ad-home">
          <div className="ad-home-content">
            <HeroComponent
              largeHeader="Desi Food Stuff, Spice Store Is Bringing Home Closer To You."
              mediumHeader="Looking for the right brands and the right flavors, visit The Spice Store and find all your favorite foods at competitive prices."
              image="/placeholder.jpg"
            />
            <div className="spacer"></div>
            <button>Find A Location Near You</button>
            <div className="spacer"></div>
            <hr />
            <div className="spacer"></div>
            <ReverseHeroComp
              largeHeader="What Makes Us Different"
              mediumHeader="Brands both loved and found at home from trusted suppliers, we believe in providing our customers with the SPICE experience which stands for great Service at the best Prices in an Inviting and Clean Environment. Find us in your neighborhood soon with our fast-growing number of stores, we hope to bring you food and comfort in every neighborhood and province in Canada."
              image="/placeholder.jpg"
            />
            <div className="spacer"></div>
            <hr />
            <div className="spacer"></div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
