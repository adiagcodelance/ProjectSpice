import React from "react";
import { motion } from "framer-motion";
import "./Location.css";
import LocationsComponent from "../Components/LocationsComponent";
import Header1 from "../Components/Header1";

const Locations = () => {
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
      <div className="spacer" />
      <section className="location-hero">
        <div className="ad-hero-01">
          <Header1 header1=<u>Locations</u>></Header1>
        </div>
        <div className="spacer" />
      </section>
      <section className="location-container">
        <LocationsComponent
          image="/placeholder.jpg"
          locationTitle="The Spice Store"
          locationAddress="449 University Avenue, Unit 13-B"
          locationCity="Charlottetown"
          locationProvince="PEI"
          locationPostal="C1A 8C9"
          locationNumber="(902) 367-2246"
          locationGoogleMaps="https://www.google.com/maps/dir//spice+store/@46.2494529,-63.179883,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4b5e52bba4d43fc5:0xfcea4e6bb4821101!2m2!1d-63.1386836!2d46.2494009?entry=ttu"
        />
      </section>
      <div className="spacer"></div>
      <hr />
      <div className="spacer"></div>
    </motion.div>
  );
};

export default Locations;
