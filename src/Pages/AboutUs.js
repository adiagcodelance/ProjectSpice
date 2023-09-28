import Footer from "../Components/Footer";
import HeroComponent from "../Components/HeroComponents";
import MegaHeader from "../Components/MegaHeader";
import Navbar from "../Components/Navbar";
import ReverseHeroComp from "../Components/ReverHeroComp";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <html>
      <title>About Us - Project Spice</title>
      <head></head>

      <div className="spacer"></div>
      <body>
        <div className="about-us">
          <div className="header-content">
            <MegaHeader
              megaHeader="Who Are We?"
              subheader="We are you!"
              image="/placeholder.jpg"
            />
          </div>
        </div>
      </body>
      <Footer />
    </html>
  );
};

export default AboutUs;
