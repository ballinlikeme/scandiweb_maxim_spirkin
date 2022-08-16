import React from "react";
import getPrice from "../../js/getPrice";
import { connect } from "react-redux";
import { CartOverlayAttribute } from "../cart-overlay-attributes/CartOverlayAttribute";
import { CartOverlayColorAttribute } from "../cart-overlay-attributes/CartOverlayColorAttribute";
import { CartItem } from "../cart-item/CartItem";

class CartOverlayItem extends CartItem {
  render() {
    return (
      <li className="overlay__item item-overlay">
        <div className="item-overlay__info">
          <div className="item-overlay__options">
            <div className="item-overlay__text-block">
              <div className="item-overlay__brand">
                {this.props.product.brand}
              </div>
              <div className="item-overlay__name">
                {this.props.product.name}
              </div>
            </div>
            <div className="item-overlay__price">
              {this.props.currency.currentCurrencySymbol}
              {getPrice(
                this.props.product.prices,
                this.props.currency.currentCurrency
              )}
            </div>
            <div className="item-overlay__attributes">
              {this.props.product.attributes.map((item) => {
                if (item.name === "Color") {
                  return (
                    <CartOverlayColorAttribute
                      selectedAttributes={this.props.product.selectedAttributes}
                      attribute={item}
                    />
                  );
                } else {
                  return (
                    <CartOverlayAttribute
                      selectedAttributes={this.props.product.selectedAttributes}
                      attribute={item}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="item-overlay__buttons">
            <div
              className="item-overlay__button item-overlay__button-plus"
              onClick={this.increaseAmount}
            ></div>
            <div className="item-overlay__amount">
              {this.props.product.amount}
            </div>
            <div
              className="item-overlay__button"
              onClick={this.decreaseAmount}
            ></div>
          </div>
        </div>
        <div
          className="item-overlay__image"
          style={{
            backgroundImage: `url(${this.props.product.gallery[0]})`,
          }}
        ></div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  const { currency, cart } = state;
  return {
    currency,
    cart,
  };
};

export default connect(mapStateToProps)(CartOverlayItem);
