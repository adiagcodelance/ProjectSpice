import React from "react";

import "./Wholesale.css";
import HeroComponents from "../Components/HeroComponents";
import BrandTable from "../Components/BrandTable";
import ReverseHeroComp from "../Components/ReverHeroComp";

const Wholesale = () => {
  return (
    <html>
      <head></head>
      <body>
        <header></header>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <section className="ad-wholesale" id="wholesale-hero">
          <div className="wholesale-hero-div">
            <div className="hero-1">
              <ReverseHeroComp
                largeHeader="Wholesale At A New Scale"
                mediumHeader="The Spice Store has expanded it horizons to not only cater to our retail customers but also include 
            those with larger requirements. We have have well tuned logistical setup allowing us to order the products you require with convenience and in a timely manner. 
            Our customer service 
            and professionalism extends beyond our retails store fronts to include our wholesale buyers."
                image="/placeholder.jpg"
              />
            </div>
          </div>
        </section>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <section className="ad-brands">
          <div className="brands">
            <BrandTable
              tableHeader="Brands We Carry"
              image1="./placeholder.jpg"
              image2="./placeholder.jpg"
              image3="./placeholder.jpg"
              image4="./placeholder.jpg"
              image5="./placeholder.jpg"
              image6="./placeholder.jpg"
              image7="./placeholder.jpg"
              image8="./placeholder.jpg"
              image9="./placeholder.jpg"
              image10="./placeholder.jpg"
              image11="./placeholder.jpg"
              image12="./placeholder.jpg"
            />
          </div>
          <div className="brands-02">
            <BrandTable
              tableHeader="Products We Carry"
              image1="./placeholder.jpg"
              image2="./placeholder.jpg"
              image3="./placeholder.jpg"
              image4="./placeholder.jpg"
              image5="./placeholder.jpg"
              image6="./placeholder.jpg"
              image7="./placeholder.jpg"
              image8="./placeholder.jpg"
              image9="./placeholder.jpg"
              image10="./placeholder.jpg"
              image11="./placeholder.jpg"
              image12="./placeholder.jpg"
            />
          </div>
        </section>
      </body>
    </html>
  );
};

export default Wholesale;
