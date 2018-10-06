import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { cartQuery } from "./queries";
import "./CartProductCard.scss";

const removeFromCartMutation = gql`
  mutation($productId: ID!) {
    remove_from_cart(productId: $productId) {
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

const removeFromCartUpdate = (
  cache,
  {
    data: {
      remove_from_cart: { products }
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
  <Mutation mutation={removeFromCartMutation} update={removeFromCartUpdate}>
    {removeFromCart => (
      <div className="CartProductCard" onClick={() => removeFromCart({ variables: { productId: id } })}>
        <img src={image} height={80} width={80} alt="product" />
        <div className="CartProductCard-info">
          <div className="CartProductCard-labels">
            <div className="CartProductCard-labels-brand">{brand}</div>
            <div>{name}</div>
          </div>
          <div className="CartProductCard-price">{`${price} €`}</div>
        </div>
      </div>
    )}
  </Mutation>
);
