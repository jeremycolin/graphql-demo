import React from "react";
import UserWelcome from "./user/UserWelcome";
import UserInfo from "./user/UserInfo";
import ProductCarousel from "./product/ProductCarousel";
import Cart from "./cart/Cart";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <>
        <UserWelcome />
        <UserInfo />
        <Cart />
        <section className="App-carousel">
          <ProductCarousel />
        </section>
      </>
    );
  }
}
