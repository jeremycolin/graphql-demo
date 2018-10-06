import React from "react";
import "./ProductRecommendation.scss";

export default ({ product }) => (
  <div className="ProductRecommendation">
    <img height={80} width={80} key={product.id} src={product.image} alt="recommendation" />
    <span className="ProductRecommendation-brand">{product.brand}</span>
  </div>
);
