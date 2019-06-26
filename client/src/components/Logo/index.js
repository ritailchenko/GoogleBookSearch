import React from "react";
import "./style.css"

function Logo() {
    return (
            <div className="logo">
                {/* <img className="logo-position" src="http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png" /> */}
                <img className="logo-position" src="https://i.pinimg.com/564x/2b/7a/c7/2b7ac798cd239a09765c486f71d2f931.jpg" />
                <h1 className="logo-text logo-position"> (React) Google Books Search </h1>
            </div>
    )
}

export default Logo;