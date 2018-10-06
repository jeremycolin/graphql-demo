import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import UserWelcome from "./user/UserWelcome";
import UserInfo from "./user/UserInfo";
import ProductCarousel from "./product/ProductCarousel";
import Cart from "./cart/Cart";
import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default () => (
  <ApolloProvider client={client}>
    <UserWelcome />
    <UserInfo />
    <Cart />
    <section className="App-carousel">
      <ProductCarousel />
    </section>
  </ApolloProvider>
);