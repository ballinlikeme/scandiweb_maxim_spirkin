import React from "react";

import Cart from "../../screens/cart/Cart"; // why extends Cart doesn't work?

import "../../scss/common.scss";
import "./cartOverlay.scss";

import toggleScrollbar from "../../js/scrollbar";

import cn from "classnames";

import product from "../../assets/products/product.jpg";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class CartOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.itemRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.overlayRef = React.createRef();

    this.state = {
      maxHeight: 0,
    };
  }

  isScrollbarRequired = () => {
    if (this.wrapperRef.current) {
      return this.wrapperRef.current.offsetHeight >= this.state.maxHeight &&
        this.props.overlay.isOpened
        ? true
        : false;
    }
  };

  closeOverlayByLink = () => {
    const { dispatch } = this.props;
    dispatch({ type: "CHANGE_VISIBILITY", payload: false });
  };

  closeCartOverlay = (event) => {
    const overlayElement = this.overlayRef.current;

    const { dispatch } = this.props;

    const path = event.path;
    const pathFirstElement = path[0];
    const pathSecondElement = path[1];

    if (
      path.includes(overlayElement) ||
      (pathFirstElement.tagName === "IMG" && pathSecondElement.tagName === "LI")
    ) {
      return;
    }

    dispatch({ type: "CHANGE_VISIBILITY", payload: false });
  };

  componentDidMount() {
    document.body.addEventListener("click", this.closeCartOverlay);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeCartOverlay);
  }

  componentDidUpdate(prevProps) {
    if (this.props.overlay.isOpened !== prevProps.overlay.isOpened) {
      this.setState({
        maxHeight: this.itemRef.current.offsetHeight * 2 + 80,
      });

      toggleScrollbar(this.wrapperRef, this.isScrollbarRequired());
    }
  }

  render() {
    return (
      <div
        className={cn("overlay", {
          _active: this.props.overlay.isOpened,
        })}
        ref={this.overlayRef}
      >
        <div className="overlay__container">
          <h2 className="overlay__title">
            <span>My Bag</span>, {"3"} items
          </h2>
          <ul
            className="overlay__list"
            ref={this.wrapperRef}
            style={{
              maxHeight: this.state.maxHeight + "px",
            }}
          >
            <li className="overlay__item item" ref={this.itemRef}>
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
                <img src={product} alt="product" />
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
            <Link onClick={this.closeOverlayByLink} to="/cart">
              <button className="common__btn overlay__btn__white">
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
  const { overlay, cart } = state;
  return {
    overlay,
    cart,
  };
};

export default connect(mapStateToProps)(CartOverlay);
