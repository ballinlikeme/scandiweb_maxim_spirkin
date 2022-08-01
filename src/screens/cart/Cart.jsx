import React, { Component } from "react";

import CartItem from "../../components/cart-item/CartItem";

import { connect } from "react-redux";

import "./cart.scss";
import "../../scss/common.scss";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  componentDidMount = () => {
    console.log(this.props, "props");
  };

  render() {
    return (
      <div className="cart ">
        <div className="cart__container _container">
          <h2 className="cart__title">cart</h2>
          <ul className="cart__list">
            {this.state.products.map((product) => {
              return <CartItem product={product} />;
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
                <div className="cart__elem_black">$42.00</div>
                <div className="cart__elem_black">3</div>
                <div className="cart__elem_black">$200.00</div>
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
  return state.cart;
};

export default connect(mapStateToProps)(Cart);
