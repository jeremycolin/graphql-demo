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
  <div className="ProductCarousel">
    <Query query={productsQuery}>
      {({ loading, error, data }) => {
        if (loading || error) return "";
        console.log(data.products);
        return data.products.map(product => <ProductCard key={product.id} {...product} />);
      }}
    </Query>
  </div>
);
