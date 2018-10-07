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
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);
