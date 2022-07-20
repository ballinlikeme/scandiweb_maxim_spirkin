import React from "react";
import "./scss/style.scss";
import { Header } from "./components/header/Header";
import { Category } from "./components/screens/category/Category";
import { Product } from "./components/screens/product/Product";
import { Cart } from "./components/screens/cart/Cart";
import { Overlay } from "./components/popups/overlay/Overlay";
import { Currency } from "./components/popups/currency/Currency";

function App() {
  return (
    <div className="wrapper">
      <Header />
    </div>
  );
}

export default App;
