import React from "react";
import "./scss/style.scss";

import Layout from "./components/layout/Layout";

import Category from "./screens/category/Category";
import Product from "./screens/product/Product";
import Cart from "./screens/cart/Cart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
