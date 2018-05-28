import React from "react";
import CarCard from "./CarCard";

import "./DriverCard.css";

const driverEmoji = name => {
  switch (name) {
    case "Prost":
      return "👨‍✈️";
    case "Schumacher":
      return "👨‍🔧";
    case "Senna":
      return "👨‍💻";
    default:
      return "👩‍";
  }
};

export default ({ driver }) => (
  <div
    className="DriverCard"
    style={driver.firstname ? { boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", minWidth: 352 } : undefined}
  >
    <span className="DriverCard-emoji">{driverEmoji(driver.lastname)}</span>
    {!!driver.firstname && <span className="DriverCard-name">{driver.firstname}</span>}
    {!!driver.cars && driver.cars.map(car => <CarCard key={car.id} car={car} />)}
  </div>
);
