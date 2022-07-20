import React, { Component } from "react";
import product from "../../../assets/products/product.jpg";
import dress from "../../../assets/products/dress.png";
import "./category.scss";

export class Category extends Component {
  render(): React.ReactNode {
    return (
      <div className="category-screen">
        <div className="category-screen__container _container">
          <h2 className="category-screen__title">Category name</h2>
          <ul className="category-screen__list">
            <li className="category-screen__item item-category-screen">
              <div className="item-category-screen__image">
                <img src={product} alt="product" />
              </div>
              <h3 className="item-category-screen__title">
                Apollo Running Short
              </h3>
              <div className="item-category-screen__price">$50.00</div>
            </li>
            <li className="category-screen__item item-category-screen">
              <div className="item-category-screen__image">
                <img src={dress} alt="product" />
              </div>
              <h3 className="item-category-screen__title">
                Apollo Running Short
              </h3>
              <div className="item-category-screen__price">$50.00</div>
            </li>
            <li className="category-screen__item item-category-screen">
              <div className="item-category-screen__image">
                <img src={product} alt="product" />
              </div>
              <h3 className="item-category-screen__title">
                Apollo Running Short
              </h3>
              <div className="item-category-screen__price">$50.00</div>
            </li>
          </ul>
          <ul className="category-screen__list">
            <li className="category-screen__item item-category-screen">
              <div className="item-category-screen__image">
                <img src={product} alt="product" />
              </div>
              <h3 className="item-category-screen__title">
                Apollo Running Short
              </h3>
              <div className="item-category-screen__price">$50.00</div>
            </li>
            <li className="category-screen__item item-category-screen">
              <div className="item-category-screen__image">
                <img src={product} alt="product" />
              </div>
              <h3 className="item-category-screen__title">
                Apollo Running Short
              </h3>
              <div className="item-category-screen__price">$50.00</div>
            </li>
            <li className="category-screen__item item-category-screen">
              <div className="item-category-screen__image">
                <img src={product} alt="product" />
              </div>
              <h3 className="item-category-screen__title">
                Apollo Running Short
              </h3>
              <div className="item-category-screen__price">$50.00</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
