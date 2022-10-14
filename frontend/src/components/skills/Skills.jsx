import React, { useEffect, useState } from "react";
import "./Skills.scss";

import { motion } from "framer-motion";
import { Appwrap, Motionwrap } from "../wrapper";
import { client, urlFor } from "../../client";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app_skills-container">
        <motion.div className="app_skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app_skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app_flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app_skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app_skills-exp-item" key={experience.year}>
              <div className="app_skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app_skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app_skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company} </p>
                      <p className="p-desc">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appwrap(
  Motionwrap(Skills, "app_skills"),
  "skills",
  "app_whitebg"
);
