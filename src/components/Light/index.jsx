import React, { useState } from "react";
import lightOn from "../Light/light-on.svg";
import lightOff from "../Light/light-off.svg";
import Lights from "../Lights";
import "../Light/style.css"

const Light = ({ name, state }) => {
  const [LightState, setLightState] = useState(state);

  const handleClick = () => {
    if (LightState === "on") {
      setLightState("off");
    } else {
      setLightState("on");
    }
  };

  return (
    <>
      <div className="light" onClick={handleClick}>
        <div className="light__icon">
          <img src={LightState === "on" ? lightOn : lightOff} />
        </div>

        <div className="light__name">{name}</div>
      </div>
    </>
  );
};

export default Light;
