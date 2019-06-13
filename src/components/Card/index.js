import React from "react";
import "./style.scss";

function Card(props) { ///click event that will finetune iniside Game.js
    return (
        <div className="card"
            onClick={() => props.handleClick(props.id)}>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default Card;