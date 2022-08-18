import React, { Component } from "react";

import { connect } from "react-redux";

import { getCurrencies } from "../../graphql/currency";

import cartSign from "../../assets/cart.svg";
import CurrencyButton from "../buttons/currency-button/CurrencyButton";
import CartOverlay from "../cart-overlay/CartOverlay";

class Actions extends Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.state = {
      currencies: [],
    };
  }

  getTotalAmountOfProducts = () => {
    let amount = 0;

    this.props.cart.products.forEach((product) => {
      amount += product.amount;
    });

    return amount;
  };

  toggleCartOverlay = () => {
    const { dispatch } = this.props;

    dispatch({
      type: "CHANGE_VISIBILITY",
      payload: !this.props.overlay.isOpened,
    });
  };

  toggleCurrencyMenu = () => {
    this.menuRef.current.classList.toggle("_active");
  };

  closeCurrencyMenu = (event) => {
    const element = event.path[0];
    if (
      !element.classList.contains("currency-pop__item") &&
      !element.classList.contains("currency")
    ) {
      this.menuRef.current.classList.remove("_active");
    }
  };

  async componentDidMount() {
    const currencies = await getCurrencies();
    this.setState({
      currencies: currencies,
    });

    document.body.addEventListener("click", this.closeCurrencyMenu);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeCurrencyMenu);
  }

  render() {
    return (
      <div ref={this.menuRef} className="header__actions actions">
        <ul className="actions__list">
          <li
            onClick={this.toggleCurrencyMenu}
            className="actions__item currency"
          >
            {this.props.currency.currentCurrencySymbol}
          </li>
          <li className="actions__item" onClick={this.toggleCartOverlay}>
            <img src={cartSign} alt="cart" />
            <div className="cart-counter">
              {this.getTotalAmountOfProducts()}
            </div>
          </li>
        </ul>
        <div className="actions__currency-pop currency-pop">
          <ul className="currency-pop__list">
            {this.state.currencies.map((currency) => {
              return (
                <CurrencyButton key={currency.label} currencyInfo={currency} />
              );
            })}
          </ul>
        </div>
        <CartOverlay />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { overlay, currency, cart } = state;
  return { overlay, currency, cart };
};

export default connect(mapStateToProps)(Actions);
