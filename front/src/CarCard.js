import React from "react";
import DriverCard from "./DriverCard";

import "./CarCard.css";

export const carEmoji = brand => {
  switch (brand) {
    case "Ferrari":
      return "🏎️";
    case "Lotus":
      return "🚘";
    case "McLaren":
      return "🚙";
    default:
      return "🚗";
  }
};

export default ({ car }) => (
  <div
    className="CarCard"
    style={car.name ? { boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", minWidth: 352 } : undefined}
  >
    <span className="CarCard-emoji">{carEmoji(car.brand)}</span>
    {!!car.name && <span className="CarCard-name">{car.name}</span>}
    {!!car.drivers && car.drivers.map(driver => <DriverCard key={driver.id} driver={driver} />)}
  </div>
);
