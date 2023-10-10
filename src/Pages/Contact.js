import React from "react";
import "./Contact.css";
import TextComponent from "../Components/TextComponent";
import Header1 from "../Components/Header1";
import Form from "../Components/Form";
import { motion } from "framer-motion";

const Contact = () => {
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
      <section className="ad-contact-hero-01">
        <div className="ad-hero-div-01">
          <Header1 header1=<u>Need Help Or Have Questions</u> />
          <TextComponent text="Give us a call or fill out the form to send us a message, and we will get back to you." />
        </div>
        <div className="spacer"></div>
      </section>
      <section className="ad-contact-form-01">
        <Form image="/placeholder.jpg" />
      </section>
      <div className="spacer"></div>
      <hr />
      <div className="spacer"></div>
    </motion.div>
  );
};

export default Contact;
