import React from "react";
import "./Franchise.css";
import FranchiseForm from "../Components/FranchiseForm";
import TextComponent from "../Components/TextComponent";
import MegaHeader from "../Components/MegaHeader";
import HeroComponents from "../Components/HeroComponents";
import ReverseHeroComponents from "../Components/ReverHeroComp";
import Header1 from "../Components/Header1";
import { motion } from "framer-motion";

const Franchise = () => {
  return (
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
      <div className="spacer"></div>
      <section className="franchise-hero">
        <MegaHeader
          megaHeader="Interested In Joining Our Team?"
          image="/placeholder.jpg"
        />
        <div className="spacer"></div>
        <hr />
        <div className="spacer"></div>
        <div className="ad-header-container-01">
          <TextComponent text="Learn more about us, who we are and what makes us better than the rest and why you should join us. Lets make more than store, together we can make a change to how people shop and find Desi food products in Canada and provide them with the best customer experience." />
        </div>
      </section>
      <div className="spacer"></div>
      <hr />
      <div className="spacer"></div>
      <section className="ad-body-01">
        <HeroComponents
          largeHeader="Constant Support"
          mediumHeader="You can expect the best support, from set up to operations. How to's, best practices, working policies and continued support from the owners and senior management."
          image="/placeholder.jpg"
        />
        <div className="spacer"></div>
        <hr />
        <div className="spacer"></div>
        <ReverseHeroComponents
          largeHeader="Knowledge and Systems"
          mediumHeader="Procurement processes, product lists allowing for large procurement allowing you consistently offer variety and range of products from the best suppliers in Canada and more. Training in systems and with licenses and tools to help you maximize your success and operational efficiency."
          image="/placeholder.jpg"
        />
      </section>
      <div className="spacer"></div>
      <hr />
      <div className="spacer"></div>
      <div className="ad-body-div-01">
        <Header1 header1="Interested In Starting A Business With Us?" />
        <TextComponent text="Fill out the form below so we can get in touch with you." />
      </div>
      <div className="spacer"></div>
      <hr />
      <div className="spacer"></div>
      <section className="ad-franchise-form">
        <FranchiseForm image="/placeholder.jpg" />
      </section>
      <div className="spacer"></div>
      <hr />
      <div className="spacer"></div>
    </motion.div>
  );
};

export default Franchise;
