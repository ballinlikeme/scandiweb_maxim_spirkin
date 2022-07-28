import React, { Component } from "react";

import "../../scss/common.scss";
import "./cart.scss";

import cn from "classnames";

import product from "../../assets/products/product.jpg";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={cn("overlay", {
          _active: this.props.overlay.isOpened,
        })}
      >
        <div className="overlay__container">
          <h2 className="overlay__title">
            <span>My Bag</span>, 3 items
          </h2>
          <ul className="overlay__list">
            <li className="overlay__item item">
              <div className="item__row">
                <div className="item__info">
                  <div className="item__textblock">
                    <div className="item__title">Appollo</div>
                    <div className="item__subtitle">Running short</div>
                  </div>
                  <div className="common__price item__price">$50.00</div>
                  <div className="item__attribute">
                    <div className="common__label item__label">Size:</div>
                    <div className="common__selection">
                      <div className="common__size item__size">XS</div>
                      <div className="common__size item__size">S</div>
                      <div className="common__size item__size">M</div>
                      <div className="common__size item__size">L</div>
                    </div>
                  </div>
                  <div className="item__attribute">
                    <div className="common__label item__label">Color:</div>
                    <div className="common__selection">
                      <div className="common__color item__color">
                        <div></div>
                      </div>
                      <div className="common__color item__color">
                        <div></div>
                      </div>
                      <div className="common__color item__color">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item__controls">
                  <button className="item__button item__button__plus"></button>
                  <div className="item__amount">1</div>
                  <button className="item__button"></button>
                </div>
              </div>
              <div className="item__image">
                <img src={product} alt="" />
              </div>
            </li>
            <li className="overlay__item item">
              <div className="item__row">
                <div className="item__info">
                  <div className="item__textblock">
                    <div className="item__title">Appollo</div>
                    <div className="item__subtitle">Running short</div>
                  </div>
                  <div className="common__price item__price">$50.00</div>
                  <div className="item__attribute">
                    <div className="common__label item__label">Size:</div>
                    <div className="common__selection">
                      <div className="common__size item__size">XS</div>
                      <div className="common__size item__size">S</div>
                      <div className="common__size item__size">M</div>
                      <div className="common__size item__size">L</div>
                    </div>
                  </div>
                  <div className="item__attribute">
                    <div className="common__label item__label">Color:</div>
                    <div className="common__selection">
                      <div className="common__color item__color">
                        <div></div>
                      </div>
                      <div className="common__color item__color">
                        <div></div>
                      </div>
                      <div className="common__color item__color">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item__controls">
                  <button className="item__button item__button__plus"></button>
                  <div className="item__amount">1</div>
                  <button className="item__button"></button>
                </div>
              </div>
              <div className="item__image">
                <img src={product} alt="" />
              </div>
            </li>
          </ul>
          <div className="overlay__total">
            <div className="overlay__label">Total</div>
            <div className="overlay__price">$200.00</div>
          </div>
          <div className="overlay__controls">
            <Link to="/cart">
              <button
                onClick={this.removeCurrentCategory}
                className="common__btn overlay__btn__white"
              >
                view bag
              </button>
            </Link>
            <button className="common__btn overlay__btn">check out</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { overlay, category } = state;
  return {
    overlay,
    category,
  };
};

export default connect(mapStateToProps)(Overlay);
