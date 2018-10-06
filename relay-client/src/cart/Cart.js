import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import CartProductCard from "./CartProductCard";
import "./Cart.scss";

const cartQuery = graphql`
  query CartQuery {
    cart {
      products {
        id
        ...CartProductCard_product
      }
    }
  }
`;

export default () => (
  <section className="Cart">
    <QueryRenderer
      environment={environment}
      query={cartQuery}
      render={({ error, props }) => {
        if (!props) return "";
        if (error) return "Unable to retrieve your cart :(";
        return props.cart.products.map(product => <CartProductCard key={product.id} product={product} />);
      }}
    />
  </section>
);
