import React, { Component } from "react";
import NavigationDots from "../header/NavigationDots";
import SocialMedia from "../header/SocialMedia";


const Appwrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app_container ${classNames}`}>
            <SocialMedia/>
            <div className="app_wrapper app_flex">
                <Component/>
                <div className="copyright">
                    <p className="p-text">developer at the world 🌎</p>
                </div>
            </div>
            <NavigationDots active={idName}/>
        </div>
    )
}

export default Appwrap;