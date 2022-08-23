import React from "react";
import { connect } from "react-redux";
import { StaticAttribute } from "../../attributes/static-attributes/StaticAttribute";
import { StaticSwatchAttribute } from "../../attributes/static-attributes/StaticSwatchAttribute";
import { Slider } from "../../slider/Slider";
import getPrice from "../../../js/getPrice";

export class CartItem extends React.PureComponent {
  calculatePrice = () => {
    const price =
      getPrice(this.props.product.prices, this.props.currency.currentCurrency) *
      this.props.product.amount;
    return price.toFixed(2);
  };

  increaseAmount = () => {
    const { dispatch } = this.props;
    const payload = {
      name: this.props.product.name,
      selectedAttributes: this.props.product.selectedAttributes,
    };
    dispatch({ type: "INCREASE_AMOUNT", payload: payload });
  };

  decreaseAmount = () => {
    const { dispatch } = this.props;
    const payload = {
      name: this.props.product.name,
      selectedAttributes: this.props.product.selectedAttributes,
    };
    dispatch({ type: "DECREASE_AMOUNT", payload: payload });
  };

  render() {
    return (
      <li className="cart__item item-cart">
        <div className="item-cart__row">
          <div className="item-cart__info">
            <div className="item-cart__text-block">
              <div className="item-cart__title">{this.props.product.brand}</div>
              <div className="item-cart__subtitle">
                {this.props.product.name}
              </div>
            </div>
            <div className="common__price">
              {this.props.currency.currentCurrencySymbol}
              {this.calculatePrice()}
            </div>
            {this.props.product.attributes.map((attribute) => {
              if (attribute.type === "swatch") {
                return (
                  <StaticSwatchAttribute
                    attribute={attribute}
                    key={attribute.name}
                    selectedAttributes={this.props.product.selectedAttributes}
                  />
                );
              } else {
                return (
                  <StaticAttribute
                    key={attribute.name}
                    attribute={attribute}
                    selectedAttributes={this.props.product.selectedAttributes}
                  />
                );
              }
            })}
          </div>
          <div className="item-cart__controls">
            <div
              className="item-cart__button item-cart__button_plus"
              onClick={this.increaseAmount}
            >
              <button></button>
            </div>
            <div className="item-cart__amount">{this.props.product.amount}</div>
            <div className="item-cart__button" onClick={this.decreaseAmount}>
              <button></button>
            </div>
          </div>
        </div>
        <Slider images={this.props.product.gallery} />
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, currency, overlay } = state;
  return {
    cart,
    currency,
    overlay,
  };
};

export function cartItemConnect(Component) {
  return connect(mapStateToProps)(Component);
}

export default cartItemConnect(CartItem);
