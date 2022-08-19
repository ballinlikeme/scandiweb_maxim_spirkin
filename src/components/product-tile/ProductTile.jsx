import React, { Component } from "react";

import cn from "classnames";

import { connect } from "react-redux";

import getPrice from "../../js/getPrice";

import { Link } from "react-router-dom";
import { getProductAttributes } from "../../graphql/productAttributes";
import { Navigate } from "react-router-dom";

class ProductTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  addToCart = async (event) => {
    event.preventDefault();
    const productAttributes = await (
      await getProductAttributes(this.props.product.id)
    ).data.product.attributes;

    if (productAttributes.length > 0) {
      alert("Select all the attributes");
      this.setState({
        redirect: true,
      });
      return;
    }

    const { dispatch } = this.props;
    const payload = {
      brand: this.props.product.brand,
      name: this.props.product.name,
      prices: this.props.product.prices,
      gallery: this.props.product.gallery,
      amount: 1,
      attributes: [],
      selectedAttributes: [],
    };

    dispatch({ type: "ADD_PRODUCT", payload: payload });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={`/product/${this.props.product.id}`} />;
    }
    return (
      <Link to={`/product/${this.props.product.id}`}>
        <li
          className={cn("category-screen__item item-category-screen", {
            _active: !this.props.product.inStock,
          })}
        >
          <div className="item-category-screen__image">
            <img src={this.props.product.gallery[0]} alt="" />
          </div>
          <h3 className="item-category-screen__title">
            {this.props.product.brand} {this.props.product.name}
          </h3>
          <div className="item-category-screen__price">
            {this.props.currency.currentCurrencySymbol}
            {getPrice(
              this.props.product.prices,
              this.props.currency.currentCurrency
            )}
          </div>
          <div
            className="item-category-screen__cart-link"
            onClick={this.addToCart}
          ></div>
        </li>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  const { currency } = state;
  return {
    currency,
  };
};

export default connect(mapStateToProps)(ProductTile);
