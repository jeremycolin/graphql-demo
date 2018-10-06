import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { cartQuery } from "../cart/queries";
import "./ProductCard.scss";

const addToCartMutation = gql`
  mutation($productId: ID!) {
    add_to_cart(productId: $productId) {
      products {
        id
        name
        brand
        price
        image
      }
    }
  }
`;

const addToCartCacheUpdate = (
  cache,
  {
    data: {
      add_to_cart: { products }
    }
  }
) => {
  const data = cache.readQuery({ query: cartQuery });
  data.cart.products = products;
  cache.writeQuery({
    query: cartQuery,
    data
  });
};

export default ({ id, brand, name, image, price }) => (
  <Mutation mutation={addToCartMutation} update={addToCartCacheUpdate}>
    {addToCart => (
      <div className="ProductCard" onClick={() => addToCart({ variables: { productId: id } })}>
        <img src={image} height={300} width={300} alt="product" />
        <div className="ProductCard-info">
          <div className="ProductCard-labels">
            <div className="ProductCard-labels-brand">{brand}</div>
            <div>{name}</div>
          </div>
          <div className="ProductCard-price">{`${price} €`}</div>
        </div>
      </div>
    )}
  </Mutation>
);
