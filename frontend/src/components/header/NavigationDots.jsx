import React from "react";

function NavigationDots({ active }) {
    return (
        <div className="app_navigation">
            {["home", "about", "skills"].map((item, index) => (
                <a
                href={`#${item}`}
                key={item + index}
                className="app_navigation-dot"
                style={active === item ? {backgroundColor: "tomato"} : {}}
                />
            ))}
        </div>
    )
}
export default NavigationDots;