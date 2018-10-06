import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProductCard from "./ProductCard";
import "./ProductCarousel.scss";

const productsQuery = gql`
  {
    products {
      id
      name
      brand
      price
      image
      recommendations {
        ... on Outfit {
          id
          image
        }
        ... on Product {
          id
          name
          image
        }
      }
    }
  }
`;

export default () => (
  <div className="ProductView">
    <Query query={productsQuery}>
      {({ loading, error, data }) => {
        if (loading || error) return "";
        return (
          <div className="ProductCarousel">
            {data.products.map(product => (
              <div key={product.id}>
                <ProductCard {...product} />
                <ProductRecommendation recommendations={product.recommendations} />
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);

const ProductRecommendation = ({ recommendations }) => {
  if (!recommendations) return null;
  return recommendations.map(productRecommendation => (
    <img
      height={80}
      width={80}
      key={productRecommendation.id}
      className="ProductRecommendations"
      src={productRecommendation.image}
    />
  ));
};
