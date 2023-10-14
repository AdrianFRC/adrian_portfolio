import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#80BCA3", color: "#333D25", fontWeight: "700"}}
    contentArrowStyle={{ borderRight: "7px solid #80BCA3" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold drop-shadow-md">{experience.title}</h3>
      <p className="text-[#655643] font-bold text-[16px] m-0">
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-[#004256] text-[14px] font-semibold pl-1 tracking-wide"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What i have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-white drop-shadow-md`}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
