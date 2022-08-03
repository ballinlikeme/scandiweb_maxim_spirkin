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
      amount: this.props.product.amount,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      return true;
    }
  }

  increaseAmount = () => {
    const {dispatch} = this.props;
    const payload = {
      name: this.state.product.name,
      selectedAttributes: this.state.product.selectedAttributes,
    }
    dispatch({type: "INCREASE_AMOUNT", payload: payload})

    this.setState({
      amount: this.state.amount + 1,
    })
  }

  decreaseAmount = () => {
    const {dispatch} = this.props;
    const payload = {
      name: this.state.product.name,
      selectedAttributes: this.state.product.selectedAttributes,
    }
    dispatch({type: "DECREASE_AMOUNT", payload: payload})

    this.setState({
      amount: this.state.amount - 1,
    })

  }

  normalizePrice = () => {
    const price = getPrice(this.state.product.prices, this.props.currency.currentCurrency) * this.state.product.amount;
    return Math.floor(price * 100) / 100;
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
              {this.props.currency.currentCurrencySymbol}
              {this.normalizePrice()}
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
            <div className="item-cart__button item-cart__button_plus"
            >
              <button onClick={this.increaseAmount}></button>
            </div>
            <div className="item-cart__amount">{this.state.amount}</div>
            <div className="item-cart__button">
              <button onClick={this.decreaseAmount}></button>
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
  const {cart, currency} = state;
  return {
    cart, currency
  };
};

export default connect(mapStateToProps)(CartItem);
