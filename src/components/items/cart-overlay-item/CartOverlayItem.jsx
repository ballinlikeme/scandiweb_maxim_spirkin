import React from "react";
import getPrice from "../../../js/getPrice";
import { connect } from "react-redux";
import { CartOverlayAttribute } from "../../attributes/cart-overlay-attributes/CartOverlayAttribute";
import { CartOverlaySwatchAttribute } from "../../attributes/cart-overlay-attributes/CartOverlaySwatchAttribute";
import { CartItem } from "../../items/cart-item/CartItem";

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
              {this.props.product.attributes.map((item, index) => {
                if (item.type === "swatch") {
                  return (
                    <CartOverlaySwatchAttribute
                      selectedAttributes={this.props.product.selectedAttributes}
                      attribute={item}
                      key={index}
                    />
                  );
                } else {
                  return (
                    <CartOverlayAttribute
                      selectedAttributes={this.props.product.selectedAttributes}
                      attribute={item}
                      key={index}
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
        <div className="item-overlay__image">
          <img src={this.props.product.gallery[0]} alt="" />
        </div>
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
