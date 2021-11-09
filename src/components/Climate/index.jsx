import React, { useState } from "react";
import "../Climate/style.css";
import imgTemperature from "../Climate/temp.svg";

const Climate = ({ temperature, humidity }) => {
  const [temper, setTemperature] = useState(temperature);

  const higherTemperature = () => {
    setTemperature(temper + 1);
  };
  const lowerTemperature = () => {
    setTemperature(temper - 1);
  };
  return (
    <>
      <div className="climate">
        <div className="climate__icon">
          <img src={imgTemperature} />
        </div>
        <div className="climate__content">
          <div className="climate__temperature">{temper}&deg;C</div>
          <div className="climate__humidity">
            Vlhost vzduchu {humidity}&nbsp;%
          </div>
        </div>
        <div className="climate__controls">
          <button className="button" onClick={higherTemperature}>
            +
          </button>
          <button className="button" onClick={lowerTemperature}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Climate;
