import Footer from "../Components/Footer";
import Header1 from "../Components/Header1";
import HeroComponents from "../Components/HeroComponents";
import HeroComponent from "../Components/HeroComponents";
import MegaHeader from "../Components/MegaHeader";
import Navbar from "../Components/Navbar";
import ReverseHeroComp from "../Components/ReverHeroComp";
import TextComponent from "../Components/TextComponent";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <html>
      <title>About Us - Project Spice</title>
      <head></head>
      <div className="spacer"></div>
      <body>
        <header></header>
        <section className="ad-aboutus" id="ad-02">
          <div className="about-us">
            <div className="header-content">
              <MegaHeader image="/placeholder.jpg" />
            </div>
            <div className="body-content">
              <div className="spacer" />
              <div className="aboutus-header1">
                <Header1 header1="We Are The Spice Store" />
              </div>
              <div className="text-box">
                <TextComponent
                  text="We are all the people who have moved away from home and look for the best option to find products from home. We came to Canada and landed in PEI, Charlottetown
              and soon found limited options and no proper desi store providing the bare minimum products we required. We decided to change things and bring the products that our 
              growing community wanted and needed on the island. We aim to not only provide more variety and consistency but also support our growing communities, and provide the same
              level of service across Canada."
                />
              </div>
              <div className="spacer" />
              <div className="ceo-comment">
                <HeroComponents
                  largeHeader="A Quote From The Owner/CEO - "
                  mediumHeader="Customer service, quality, a new experience. We are not here to simply sell, we are here to make a change and continue to provide for future generations. We believe in our customer base and thank all our customers for their patronage and strive to grow and live up to their expectations."
                  image="./placeholder.jpg"
                />
              </div>
              <div className="spacer" />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default AboutUs;
