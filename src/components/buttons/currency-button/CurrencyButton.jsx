import React, { Component } from "react";

import cn from "classnames";

import { connect } from "react-redux";

class CurrencyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyInfo: this.props.currencyInfo,
    };
  }

  changeCurrency = () => {
    const { dispatch } = this.props;

    const { label, symbol } = this.state.currencyInfo;
    const payload = {
      currency: label,
      symbol: symbol,
    };

    dispatch({
      type: "CHANGE_CURRENCY",
      payload: payload,
    });

    this.props.menuRef.current.classList.remove("_active");
  };

  render() {
    return (
      <li
        onClick={this.changeCurrency}
        className={cn("currency-pop__item", {
          _active: this.state.currencyInfo.label === this.props.currentCurrency,
        })}
      >
        {this.state.currencyInfo.symbol} {this.state.currencyInfo.label}
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return state.currency;
};

export default connect(mapStateToProps)(CurrencyButton);
