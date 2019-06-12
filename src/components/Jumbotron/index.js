import React from "react";
import "./style.scss"

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1>Finish Him !</h1>
      <h2>How to play:</h2>
      <p>
        Click on an image to earn points, but don't click on any more than once. Try to get all 12 without losing!
      </p>
    </div>
  );
}
export default Jumbotron;