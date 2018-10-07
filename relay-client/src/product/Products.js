import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import ProductCard from "./ProductCard";
import "./ProductCarousel.scss";

const productsQuery = graphql`
  query ProductsQuery {
    products {
      id
      ...ProductCard_product
    }
  }
`;

export default () => (
  <div className="ProductView">
    <QueryRenderer
      environment={environment}
      query={productsQuery}
      render={({ error, props }) => {
        if (error || !props) return "";
        return (
          <div className="ProductCarousel">
            {props.products.map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        );
      }}
    />
  </div>
);
