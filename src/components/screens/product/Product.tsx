import React, { Component } from "react";
import product from "../../../assets/products/product.jpg";
import "./product.scss";
import "../../../scss/common.scss";

export class Product extends Component {
  render(): React.ReactNode {
    return (
      <div className="product">
        <div className="product__container _container">
          <div className="product__images images">
            <div className="images__small">
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
              <img src={product} alt="Product" />
            </div>
            <div className="images__big">
              <img src={product} alt="Product" />
            </div>
          </div>
          <div className="product__information">
            <div className="product__textblock">
              <div className="product__title">Apollo</div>
              <div className="product__subtitle">Running Shirt</div>
            </div>
            <div className="product__attributes">
              <div className="product__item">
                <div className="product__label common__label">size:</div>
                <div className="common__selection">
                  <div className="common__size">XS</div>
                  <div className="common__size">S</div>
                  <div className="common__size">M</div>
                  <div className="common__size">L</div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__label common__label">color:</div>
                <div className="common__selection">
                  <div className="common__color">
                    <div></div>
                  </div>
                  <div className="common__color">
                    <div></div>
                  </div>
                  <div className="common__color">
                    <div></div>
                  </div>
                  <div className="common__color">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__price">
              <div className="price__label common__label">price:</div>
              <div className="common__price">$50.00</div>
            </div>
            <div className="product__button">
              <button className="common__btn common__btn__big">
                add to cart
              </button>
            </div>
            <div className="product__text">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
