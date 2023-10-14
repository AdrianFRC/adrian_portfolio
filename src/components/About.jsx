import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-[#ff598c] to-[#68ffb3] p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#80BCA3] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-24 h-24 object-contain rounded-full" />
          <h3 className="text-[#F6F7BD] text-[20px] font-bold text-center drop-shadow-md">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-white drop-shadow-md`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 0.75)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Mi sto specializzando nei campi del front-end development e React Native
        development. Il mio obiettivo è creare esperienze utente sorprendenti
        per il web e le app mobile. Mentre il mio portfolio è ancora agli inizi,
        sono determinato a sviluppare conoscenze approfondite anche su altri
        framework e librerie JavaScript per offrire soluzioni sempre più
        avanzate. Esplorate i miei progetti attuali e seguite il mio percorso di
        crescita!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
