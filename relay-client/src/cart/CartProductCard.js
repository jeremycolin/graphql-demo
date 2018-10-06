import React from "react";
import { createFragmentContainer, commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import "./CartProductCard.scss";

const removeFromCartMutation = graphql`
  mutation CartProductCardMutation($productId: ID!) {
    remove_from_cart(productId: $productId) {
      products {
        ...CartProductCard_product
      }
    }
  }
`;

const removeFromCart = productId => () =>
  commitMutation(environment, {
    mutation: removeFromCartMutation,
    variables: { productId },
    updater: store => {
      // Get the payload returned from the server
      const payload = store.getRootField("remove_from_cart");
      // Get the products in the payload
      const products = payload.getLinkedRecords("products");
      // Update the cart on the store
      store
        .getRoot()
        .getLinkedRecord("cart")
        .setLinkedRecords(products, "products");
    },
    optimisticUpdater: store => {
      // Get the current products in the cart
      const products = store
        .getRoot()
        .getLinkedRecord("cart")
        .getLinkedRecords("products");
      // Filter out the product to remove
      const newProducts = products.filter(product => product.getDataID() !== productId);
      //Update the cart on the store
      store
        .getRoot()
        .getLinkedRecord("cart")
        .setLinkedRecords(newProducts, "products");
    }
  });

const ProductCard = ({ product }) => {
  const { id, brand, name, image, price } = product;
  return (
    <div className="CartProductCard" onClick={removeFromCart(id)}>
      <img src={image} height={80} width={80} alt="product" />
      <div className="CartProductCard-info">
        <div className="CartProductCard-labels">
          <div className="CartProductCard-labels-brand">{brand}</div>
          <div>{name}</div>
        </div>
        <div className="CartProductCard-price">{`${price} €`}</div>
      </div>
    </div>
  );
};

export default createFragmentContainer(
  ProductCard,
  graphql`
    fragment CartProductCard_product on Product {
      id
      name
      brand
      price
      image
    }
  `
);
