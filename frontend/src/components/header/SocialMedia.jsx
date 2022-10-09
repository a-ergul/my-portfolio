import React from "react";

import { BsTwitter } from "react-icons/bs";

import {FaLinkedinIn,FaGithub } from "react-icons/fa"

function SocialMedia() {
    return (
        <div className="app_social">
            <div>
                <FaGithub onClick={()=>window.open('https://github.com/a-ergul',"_blank")}/>
            </div>
            <div>
                <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/alpayergul/', "_blank")}/>
            </div>
            <div>
        <BsTwitter onClick={()=>window.open('https://twitter.com/alpayergul',"_blank")}/>
      </div>
        </div>
    )
}

export default SocialMedia;