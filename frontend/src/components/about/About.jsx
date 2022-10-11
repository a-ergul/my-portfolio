import React, { useEffect, useState } from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { Appwrap, Motionwrap } from "../../components/wrapper";
import { client, urlFor } from "../../client";


function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
      const query = '*[_type == "abouts"]';
      client.fetch(query).then((data) => {
          setAbouts(data);
      })
  }, []);



  return (
    <>
      <h2 className="head-text">
        <span>
          {" "}
          Good Design means{" "}
          <span>
            {" "}
            <br />{" "}
          </span>
           Good Business{" "}
        </span>
      </h2>
      <div className="app_profiles">
          {abouts.map((about, index) => (
              <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale:1.1}}
              transition={{duration: 0.5, type: 'tween'}}
              className= 'app_profiles-item'
              key={about.title + index}
              >
                  <img src={urlFor(about.imgUrl)} alt={about.title}/>
                  <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                  <p className="p-text" style={{marginTop: 10}}>
                    {about.description}
                  </p>
              </motion.div>
          ))}
      </div>
    </>
  );
}

export default Appwrap(Motionwrap(About, "app_about"), "about", "app_whitebg");
