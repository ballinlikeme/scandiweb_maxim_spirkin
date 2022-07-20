import React, { Component } from "react";
import "./currency.scss";

export class Currency extends Component {
  render(): React.ReactNode {
    return (
      <div className="currency">
        <ul className="currency__list">
          <li className="currency__item _active">$ USD</li>
          <li className="currency__item">€ EUR</li>
          <li className="currency__item">¥ JPY</li>
        </ul>
      </div>
    );
  }
}
