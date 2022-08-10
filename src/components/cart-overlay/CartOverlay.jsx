import React from "react";
import "./cartOverlay.scss";
import { connect } from "react-redux";
import CartOverlayItem from "../cart-overlay-item/CartOverlayItem";

class CartOverlay extends React.PureComponent {
  constructor(props) {
    super(props);

    this.itemRef = React.createRef();
  }



  render() {
    if (this.props.overlay.isOpened) {
      if (this.props.cart.products.length > 0) {
        return (
          <div className="overlay">
            <div className="overlay__wrapper">
              <div className="overlay__title">
                <span>My Bag,</span> 3 items
              </div>
              <ul className="overlay__row" ref={this.itemRef}>
                {this.props.cart.products.map((item) => {
                  return <CartOverlayItem product={item} />;
                })}
              </ul>
              <div className="overlay__footer footer-overlay">
                <div className="footer-overlay__stats">
                  <div className="footer-overlay__label">Total</div>
                  <div className="footer-overlay__price">$200.00</div>
                </div>
                <div className="footer-overlay__buttons">
                  <button className="footer-overlay__button">view bag</button>
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
        <div className="overlay">
          <div className="overlay__wrapper">
            <div className="overlay__title">
              <span>My Bag,</span> 3 items
            </div>
            <ul className="overlay__row" ref={this.itemRef}>Empty Cart</ul>
            <div className="overlay__footer footer-overlay">
              <div className="footer-overlay__stats">
                <div className="footer-overlay__label">Total</div>
                <div className="footer-overlay__price">$200.00</div>
              </div>
              <div className="footer-overlay__buttons">
                <button className="footer-overlay__button">view bag</button>
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
  const { overlay, cart } = state;
  return {
    overlay,
    cart,
  };
};

export default connect(mapStateToProps)(CartOverlay);

// import React from "react";

// import { Cart, connect } from "../../screens/cart/Cart";
// import CartOverlayItem from "../cart-overlay-item/CartOverlayItem";

// import "../../scss/common.scss";
// import "./cartOverlay.scss";

// import toggleScrollbar from "../../js/scrollbar";

// import cn from "classnames";

// import product from "../../assets/products/product.jpg";

// import { Link } from "react-router-dom";

// class CartOverlay extends Cart {
//   constructor(props) {
//     super(props);

//     this.itemRef = React.createRef();
//     this.wrapperRef = React.createRef();
//     this.overlayRef = React.createRef();

//     this.state = {
//       maxHeight: 0,
//     };
//   }

//   isScrollbarRequired = () => {
//     if (this.wrapperRef.current) {
//       return this.wrapperRef.current.offsetHeight >= this.state.maxHeight &&
//         this.props.overlay.isOpened
//         ? true
//         : false;
//     }
//   };

//   closeOverlayByLink = () => {
//     const { dispatch } = this.props;
//     dispatch({ type: "CHANGE_VISIBILITY", payload: false });
//   };

//   closeCartOverlay = (event) => {
//     const overlayElement = this.overlayRef.current;

//     const { dispatch } = this.props;

//     const path = event.path;
//     const pathFirstElement = path[0];
//     const pathSecondElement = path[1];

//     if (
//       path.includes(overlayElement) ||
//       (pathFirstElement.tagName === "IMG" && pathSecondElement.tagName === "LI")
//     ) {
//       return;
//     }

//     dispatch({ type: "CHANGE_VISIBILITY", payload: false });
//   };

//   componentDidMount() {
//     console.log(this.itemRef);
//     document.body.addEventListener("click", this.closeCartOverlay);
//   }

//   componentWillUnmount() {
//     document.body.removeEventListener("click", this.closeCartOverlay);
//   }

//   componentDidUpdate(prevProps) {
//     if (
//       this.props.overlay.isOpened !== prevProps.overlay.isOpened &&
//       this.props.overlay.isOpened
//     ) {
//       this.setState({
//         maxHeight: this.wrapperRef.current.children[0].clientHeight * 2 + 80,
//       });
//       console.log(this.wrapperRef);
//       toggleScrollbar(this.wrapperRef, this.isScrollbarRequired());
//     }
//   }

//   render() {
//     if (this.props.overlay.isOpened) {
//       return (
//         <div
//           className={cn("overlay", {
//             _active: this.props.overlay.isOpened,
//           })}
//           ref={this.overlayRef}
//         >
//           <div className="overlay__container">
//             <h2 className="overlay__title">
//               <span>My Bag</span>, {this.calculateTotalAmount()} items
//             </h2>
//             <ul
//               className="overlay__list"
//               ref={this.wrapperRef}
//               style={{
//                 maxHeight: this.state.maxHeight + "px",
//               }}
//             >
//               {this.props.cart.products.map((product) => {
//                 return (
//                   <CartOverlayItem itemRef={this.itemRef} product={product} />
//                 );
//               })}
//             </ul>
//             <div className="overlay__total">
//               <div className="overlay__label">Total</div>
//               <div className="overlay__price">
//                 {this.props.currency.currentCurrencySymbol}
//                 {this.calculateTotalPrice()}
//               </div>
//             </div>
//             <div className="overlay__controls">
//               <Link onClick={this.closeOverlayByLink} to="/cart">
//                 <button className="common__btn overlay__btn__white">
//                   view bag
//                 </button>
//               </Link>
//               <button className="common__btn overlay__btn">check out</button>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default connect(CartOverlay);
