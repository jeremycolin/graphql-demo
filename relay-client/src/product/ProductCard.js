import React from "react";
import { createFragmentContainer, commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import "./ProductCard.scss";

const addToCartMutation = graphql`
  mutation ProductCardMutation($productId: ID!) {
    add_to_cart(productId: $productId) {
      products {
        ...ProductCard_product
      }
    }
  }
`;

const addToCart = productId => () =>
  commitMutation(environment, {
    mutation: addToCartMutation,
    variables: { productId },
    updater: store => {
      // Get the payload returned from the server
      const payload = store.getRootField("add_to_cart");
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
      // Get the current product in the store we are trying to add
      const productToAdd = store.get(productId);
      // Update the cart on the store
      store
        .getRoot()
        .getLinkedRecord("cart")
        .setLinkedRecords([...products, productToAdd], "products");
    }
  });

const ProductCard = ({ product }) => {
  const { id, brand, name, image, price } = product;
  return (
    <div className="ProductCard" onClick={addToCart(id)}>
      <img src={image} height={300} width={300} alt="product" />
      <div className="ProductCard-info">
        <div className="ProductCard-labels">
          <div className="ProductCard-labels-brand">{brand}</div>
          <div>{name}</div>
        </div>
        <div className="ProductCard-price">{`${price} €`}</div>
      </div>
    </div>
  );
};

export default createFragmentContainer(
  ProductCard,
  graphql`
    fragment ProductCard_product on Product {
      id
      name
      brand
      price
      image
    }
  `
);
