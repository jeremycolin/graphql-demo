import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import "./ProductRecommendation.scss";

const ProductRecommendation = ({ product }) => (
  <div className="ProductRecommendation">
    <img height={80} width={80} key={product.id} src={product.image} alt="recommendation" />
    <span className="ProductRecommendation-brand">{product.brand}</span>
  </div>
);

export default createFragmentContainer(
  ProductRecommendation,
  graphql`
    fragment ProductRecommendation_product on Recommendation {
      ... on Product {
        id
        brand
        image
      }
    }
  `
);
