import React from "react";
import { Query } from "react-apollo";
import CartProductCard from "./CartProductCard";
import { cartQuery } from "./queries";
import "./Cart.scss";

export default () => (
  <section className="Cart">
    <Query query={cartQuery}>
      {({ loading, error, data }) => {
        if (loading) return "";
        if (error) return "Unable to retrieve your cart :(";
        return data.cart.products.map(product => <CartProductCard key={product.id} {...product} />);
      }}
    </Query>
  </section>
);
