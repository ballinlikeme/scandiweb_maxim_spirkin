import React from "react";
import "./cartOverlay.scss";
import { connect } from "react-redux";
import CartOverlayItem from "../cart-overlay-item/CartOverlayItem";
import { Cart } from "../../screens/cart/Cart";
import { Link } from "react-router-dom";

class CartOverlay extends Cart {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.overlayRef = React.createRef();

    this.state = {
      maxHeight: null,
    };
  }

  closeCartOverlayByLink = () => {
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
    if (prevProps.overlay.isOpened !== this.props.overlay.isOpened) {
      if (this.props.cart.products.length > 2 && this.props.overlay.isOpened) {
        this.setState({
          maxHeight:
            this.wrapperRef.current.childNodes[0].offsetHeight +
            this.wrapperRef.current.childNodes[1].offsetHeight,
        });
      }
      if (this.props.cart.products.length < 2 && this.props.overlay.isOpened) {
        this.setState({
          maxHeight: null,
        });
      }
    }
  }

  maxHeightSetter = () => {
    console.log("maxheight", this.state.maxHeight);
    return this.state.maxHeight ? `${this.state.maxHeight + 40}px` : "auto";
  };

  render() {
    if (this.props.overlay.isOpened) {
      if (this.props.cart.products.length > 0) {
        return (
          <div className="overlay" ref={this.overlayRef}>
            <div className="overlay__wrapper">
              <div className="overlay__title">
                <span>My Bag,</span> {this.calculateTotalAmount()} items
              </div>
              <ul
                className="overlay__row"
                ref={this.wrapperRef}
                style={{
                  maxHeight: this.maxHeightSetter(),
                }}
              >
                {this.props.cart.products.map((item, index) => {
                  return <CartOverlayItem product={item} key={index} />;
                })}
              </ul>
              <div className="overlay__footer footer-overlay">
                <div className="footer-overlay__stats">
                  <div className="footer-overlay__label">Total</div>
                  <div className="footer-overlay__price">
                    {this.props.currency.currentCurrencySymbol}
                    {this.calculateTotalPrice()}
                  </div>
                </div>
                <div className="footer-overlay__buttons">
                  <Link
                    to="/cart"
                    style={{
                      width: "100%",
                    }}
                  >
                    <button className="footer-overlay__button">view bag</button>
                  </Link>
                  <button className="footer-overlay__button footer-overlay__button-green">
                    check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="overlay" ref={this.overlayRef}>
          <div className="overlay__wrapper">
            <div className="overlay__title">
              <span>My Bag,</span> {this.calculateTotalAmount()} items
            </div>
            <ul
              className="overlay__row"
              ref={this.wrapperRef}
              style={{
                width: "250px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Your cart is empty!
            </ul>
            <div className="overlay__footer footer-overlay">
              <div className="footer-overlay__stats">
                <div className="footer-overlay__label">Total</div>
                <div className="footer-overlay__price">
                  {this.props.currency.currentCurrencySymbol}
                  {this.calculateTotalPrice()}
                </div>
              </div>
              <div className="footer-overlay__buttons">
                <Link
                  to="/cart"
                  style={{
                    width: "100%",
                  }}
                  onClick={this.closeCartOverlayByLink}
                >
                  <button className="footer-overlay__button">view bag</button>
                </Link>
                <button className="footer-overlay__button footer-overlay__button-green">
                  check out
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const { overlay, cart, currency } = state;
  return {
    overlay,
    cart,
    currency,
  };
};

export default connect(mapStateToProps)(CartOverlay);
