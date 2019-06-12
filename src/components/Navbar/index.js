import React from "react";
import "./nav.scss";

function Nav(props) {
    return (
        <nav className="navbar">
            <h2>Round 1</h2>
            <h2>{`${props.primaryHeadingText} ${props.primaryHeadingValue}`}</h2>
            <h2>{`${props.secondaryHeadingText} ${props.secondaryHeadingValue}`}</h2>
        </nav>
    )
}

export default Nav;