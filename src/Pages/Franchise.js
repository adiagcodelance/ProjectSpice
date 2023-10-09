import React from "react";

import "./Franchise.css";
import FranchiseForm from "../Components/FranchiseForm";
import TextComponent from "../Components/TextComponent";

const Franchise = () => {
  return (
    <html>
      <head></head>
      <body>
        <header></header>
        <div className="spacer"></div>
        <section className="franchise-hero">
          <div className="ad-header-container-01">
            <label className="ad-header-01">
              Interested In Joining Our Team?
            </label>
            <TextComponent text="Learn more about us, who we are and what makes us better than the rest and why you should join us. Lets make more than store, together we can make a change to how people shop and find Desi food products in Canada and provide them with the best customer experience." />
          </div>
          <div className="empty-block"></div>
        </section>
        <section className="ad-franchise-form">
          <FranchiseForm image="/placeholder.jpg" />
        </section>
      </body>
    </html>
  );
};

export default Franchise;
