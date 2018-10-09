import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import "./OutfitRecommendation.scss";

const OutfitRecommendation = ({ outfit }) => (
  <img
    height={80}
    width={80}
    key={outfit.id}
    className="OutfitRecommendation"
    src={outfit.image}
    alt="recommendation"
  />
);

export default createFragmentContainer(
  OutfitRecommendation,
  graphql`
    fragment OutfitRecommendation_outfit on Outfit {
      id
      image
    }
  `
);
