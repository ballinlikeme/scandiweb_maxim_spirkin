import React, { Component } from "react";

import { connect } from "react-redux";

import { StaticAttribute } from "../static-attributes/StaticAttribute";

import getPrice from "../../js/getPrice";
import { StaticColorAttribute } from "../static-attributes/StaticColorAttribute";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <li className="cart__item item-cart">
        <div className="item-cart__row">
          <div className="item-cart__info">
            <div className="item-cart__text-block">
              <div className="item-cart__title">{this.state.product.brand}</div>
              <div className="item-cart__subtitle">
                {this.state.product.name}
              </div>
            </div>
            <div className="common__price">
              {this.props.currentCurrencySymbol}
              {getPrice(this.state.product.prices, this.props.currentCurrency)}
            </div>
            {this.state.product.attributes.map((attribute) => {
              if (attribute.name === "Color") {
                return (
                  <StaticColorAttribute
                    attribute={attribute}
                    key={attribute.name}
                    selectedAttributes={this.state.product.selectedAttributes}
                  />
                );
              } else {
                return (
                  <StaticAttribute
                    key={attribute.name}
                    attribute={attribute}
                    selectedAttributes={this.state.product.selectedAttributes}
                  />
                );
              }
            })}
          </div>
          <div className="item-cart__controls">
            <div className="item-cart__button item-cart__button_plus">
              <button></button>
            </div>
            <div className="item-cart__amount">1</div>
            <div className="item-cart__button">
              <button></button>
            </div>
          </div>
        </div>
        <div className="item-cart__slider slider">
          <div className="slider__wrapper">
            <div className="slider__item">
              <img src={this.state.product.gallery[0]} alt="Product" />
              <div className="slider__controls">
                <button className="slider__button button">
                  <div className="button__arrow button__arrow_prev"></div>
                </button>
                <button className="slider__button button">
                  <div className="button__arrow button__arrow_next"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return state.currency;
};

export default connect(mapStateToProps)(CartItem);
