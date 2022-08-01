import React, { Component } from "react";

import cn from "classnames";

import { connect } from "react-redux";

import getPrice from "../../../js/getPrice";

import { Link } from "react-router-dom";

class ProductTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: this.props.product,
    };
  }

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
            {this.state.productInfo.name}
          </h3>
          <div className="item-category-screen__price">
            {this.props.currentCurrencySymbol}
            {getPrice(
              this.state.productInfo.prices,
              this.props.currentCurrency
            )}
          </div>
          <div className="item-category-screen__cart-link"></div>
        </li>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return state.currency;
};

export default connect(mapStateToProps)(ProductTile);
