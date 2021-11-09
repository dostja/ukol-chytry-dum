import React from "react";
import Lights from "../Lights";
import "../Dashboard/style.css";
import Blinds from "../Blinds";
import Light from "../Light";
import Climate from "../Climate";
import Energy from "../Energy";

const Dashboard = ({ data }) => {
  return (
    <>
      <main className="dashboard">
        <Lights lights={data.lights} />
        <Light />
        <Climate
          temperature={data.climate.temperature}
          humidity={data.climate.humidity}
        />
        <Blinds />
        <Energy
          electricity={data.energyConsumption.electricity}
          water={data.energyConsumption.water}
        />
      </main>
    </>
  );
};

export default Dashboard;
