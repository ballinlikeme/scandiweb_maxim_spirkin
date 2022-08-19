import React from "react";
import CartItem from "../../components/items/cart-item/CartItem";
import { connect } from "react-redux";
import cn from "classnames";

import "./cart.scss";
import "../../scss/common.scss";

export class Cart extends React.PureComponent {
  calculateCleanPrice = () => {
    let cleanPrice = 0;
    this.props.cart.products.forEach((product) => {
      const currentProductPrice = product.prices.find((price) => {
        return price.currency.label === this.props.currency.currentCurrency;
      });
      const currentProductPriceAmount =
        currentProductPrice.amount * product.amount;
      cleanPrice += currentProductPriceAmount;
    });
    return cleanPrice || 0;
  };

  calculateTax = () => {
    return Number((this.calculateCleanPrice() * 0.21).toFixed(2)) || 0;
  };

  calculateTotalPrice = () => {
    return (this.calculateCleanPrice() + this.calculateTax()).toFixed(2) || 0;
  };

  calculateTotalAmount = () => {
    let amount = 0;

    this.props.cart.products.forEach((product) => {
      amount += product.amount;
    });

    return amount;
  };

  render() {
    return (
      <div
        className={cn("cart", {
          _active: this.props.overlay.isOpened,
        })}
      >
        <div className="cart__container _container">
          <h2 className="cart__title">cart</h2>
          <ul className="cart__list">
            {this.props.cart.products.map((product, index) => {
              return <CartItem product={product} key={index} />;
            })}
          </ul>
          <div className="cart__footer">
            <div className="cart__total">
              <div className="cart__result">
                <div className="cart__elem">Tax 21%:</div>
                <div className="cart__elem">Quantity:</div>
                <div className="cart__elem">Total:</div>
              </div>
              <div className="cart__result">
                <div className="cart__elem_black">
                  {this.props.currency.currentCurrencySymbol}
                  {this.calculateTax()}
                </div>
                <div className="cart__elem_black">
                  {this.calculateTotalAmount()}
                </div>
                <div className="cart__elem_black">
                  {this.props.currency.currentCurrencySymbol}
                  {this.calculateTotalPrice()}
                </div>
              </div>
            </div>
            <button className="common__btn">order</button>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(Cart);
