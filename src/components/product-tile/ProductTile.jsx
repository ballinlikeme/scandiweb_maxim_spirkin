import React, { Component } from "react";

import cn from "classnames";

import { connect } from "react-redux";

import getPrice from "../../js/getPrice";

import { Link } from "react-router-dom";
import { getProductAttributes } from "../../query/productAttributes";

class ProductTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: this.props.product,
    };
  }

  addToCart = async () => {
    const productAttributes = await (
      await getProductAttributes(this.state.productInfo.id)
    ).data.product.attributes;

    if (productAttributes.length > 0) {
      alert("Select all the attributes");
      return;
    }

    const { dispatch } = this.props;
    const payload = {
      brand: this.state.productInfo.brand,
      name: this.state.productInfo.name,
      prices: this.state.productInfo.prices,
      gallery: this.state.productInfo.gallery,
      amount: 1,
      attributes: [],
      selectedAttributes: [],
    };

    dispatch({ type: "ADD_PRODUCT", payload: payload });
  };

  render() {
    return (
      <Link to={`/product/${this.state.productInfo.id}`}>
        <li
          className={cn("category-screen__item item-category-screen", {
            _active: !this.state.productInfo.inStock,
          })}
        >
          <div className="item-category-screen__image">
            <img src={this.state.productInfo.gallery[0]} alt="" />
          </div>
          <h3 className="item-category-screen__title">
            {this.state.productInfo.brand} {this.state.productInfo.name}
          </h3>
          <div className="item-category-screen__price">
            {this.props.currency.currentCurrencySymbol}
            {getPrice(
              this.state.productInfo.prices,
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
