import React from "react";
import "./OutfitRecommendation.scss";

export default ({ outfit }) => (
  <img
    height={80}
    width={80}
    key={outfit.id}
    className="OutfitRecommendation"
    src={outfit.image}
    alt="recommendation"
  />
);
