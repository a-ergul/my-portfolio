import React from "react";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="app_navbar">
            <div className="app_navbar-logo">
            aergul
            </div>
            <ul className="app_navbar-link">
                {["home", "about", "skills"].map((item) => (
                    <li className="app_flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;