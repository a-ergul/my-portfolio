import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { Appwrap } from "../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
};

function Header() {
  return (
    <div id="home" className="app_header app_flex">
      <motion.div
        className="app_header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
      >
        <div className="app_header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <div className="head-text">Alpay Ergül</div>
            </div>
          </div>
          <div className="tag-cmp app_flex">
            <p className="p-text">Software Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        className="app_header-img"
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="profile" className="profile-bg" />
        <motion.img
        whileInView={{scale: [0,1]}}
        transition={{ duration: 1, ease: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app_header-circles"
      >
        {[images.Reactnative, images.redux, images.sass].map(
          (circle, index) => (
            <div className="circle-cmp app_flex" key={`circle#${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default Appwrap(Header, 'home');
