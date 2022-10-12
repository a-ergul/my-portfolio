import React, { useState } from "react";
import "./Navbar.scss";

import { motion } from "framer-motion";

import { HiX, HiMenuAlt4 } from "react-icons/hi";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">aergul</div>
      <ul className="app_navbar-link">
        {["home", "about", "skills"].map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app_navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {" "}
            <HiX onClick={() => setToggle(false)} />
            <ul>
                {["home", "about", "skills"].map((item) => (
                    <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
