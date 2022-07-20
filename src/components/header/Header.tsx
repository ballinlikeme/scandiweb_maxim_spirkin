import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import dollarSign from "../../assets/dollar.svg";
import cartSign from "../../assets/cart.svg";
import "./header.scss";

export class Header extends Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <div className="header__container _container">
          <nav className="header__categories categories">
            <ul className="categories__list">
              <li className="categories__item _active">women</li>
              <li className="categories__item">men</li>
              <li className="categories__item">kids</li>
            </ul>
          </nav>
          <div className="header__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="header__actions actions">
            <ul className="actions__list">
              <li className="actions__item currency">
                <img src={dollarSign} alt="Currency" />
              </li>
              <li className="actions__item">
                <img src={cartSign} alt="Cart" />
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
