import { motion } from "framer-motion";

import { styles } from "../styles";
import { StrongholdCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#80BCA3]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-[#80BCA3]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-md`}>
            Hi, I'm{" "}
            <span className="text-[#80BCA3] drop-shadow-md">Adrian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Benvenuti nel mio portfolio! <br className="sm:block hidden" />
            Qui troverete alcuni dei miei progetti più recenti.{" "}
            <br className="sm:block hidden" /> Scoprite il mio lavoro e le mie
            aspirazioni.
          </p>
        </div>
      </div>

      <StrongholdCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
