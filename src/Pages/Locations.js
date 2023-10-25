import React from "react";
import { motion } from "framer-motion";
import LocationsComponent from "../Components/LocationsComponent";
import Header1 from "../Components/Header1";

import "./Location.css";

const Locations = () => {
  return (
    <div>
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
        />
      </section>
      <div className="spacer"></div>
    </div>
  );
};
export default Locations;
