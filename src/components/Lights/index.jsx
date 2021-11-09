import React from "react";
import Dashboard from "../Dashboard";
import Light from "../Light";
import "../Lights/style.css";

const Lights = ({ lights }) => {
  return (
    <>
      <div className="lights">
        {lights.map((nameRoom) => (
          <Light
            key={nameRoom.name}
            name={nameRoom.name}
            state={nameRoom.state}
          />
        ))}
      </div>
    </>
  );
};

export default Lights;
