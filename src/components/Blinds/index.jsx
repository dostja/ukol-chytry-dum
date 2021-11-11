import React, { useState } from "react";
import blindsOpen from "../Blinds/blinds-open.svg";
import blindsClosed from "../Blinds/blinds-closed.svg";
import "../Blinds/style.css";

const Blinds = ({ state }) => {
  const [blinds, setBlinds] = useState({ state });

  const blindsUp = () => {
    setBlinds("open");
  };

  const blindsDown = () => {
    setBlinds("close");
  };

  return (
    <>
      <div className="blinds">
        <div className="blinds__icon">
          <img
            src={blinds === "open" ? blindsOpen : blindsClosed}
            alt={blinds === "open" ? "blindsOpen" : "blindsClosed"}
          />
        </div>
        <div className="blinds__name">Žaluzie</div>

        <div className="blinds__controls">
          <button
            onClick={blindsUp}
            className={blinds === "open" ? "button button--active" : "button "}
          >
            Otevřeno
          </button>
          <button
            onClick={blindsDown}
            className={blinds === "close" ? "button button--active" : "button "}
          >
            Zavřeno
          </button>
        </div>
      </div>
    </>
  );
};

export default Blinds;
