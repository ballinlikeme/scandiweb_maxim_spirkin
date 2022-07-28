import React, { Component } from "react";
import "./cart.scss";
import "../../scss/common.scss";

export class Cart extends Component {
  render() {
    return (
      <div className="cart ">
        <div className="cart__container _container">
          <h2 className="cart__title">cart</h2>
          <ul className="cart__list">
            <li className="cart__item item-cart">
              <div className="item-cart__row">
                <div className="item-cart__info">
                  <div className="item-cart__text-block">
                    <div className="item-cart__title">Apollo</div>
                    <div className="item-cart__subtitle">Running Short</div>
                  </div>
                  <div className="common__price">$50.00</div>
                  <div className="item-cart__attribute">
                    <div className="common__label">size:</div>
                    <ul className="common__selection">
                      <li className="common__size _active">s</li>
                      <li className="common__size">xs</li>
                      <li className="common__size">xs</li>
                      <li className="common__size">xs</li>
                    </ul>
                  </div>
                  <div className="item-cart__attribute">
                    <div className="common__label">color:</div>
                    <ul className="common__selection">
                      <li className="common__color _active">
                        <div></div>
                      </li>
                      <li className="common__color">
                        <div></div>
                      </li>
                      <li className="common__color">
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-cart__controls">
                  <div className="item-cart__button item-cart__button_plus">
                    <button></button>
                  </div>
                  <div className="item-cart__amount">1</div>
                  <div className="item-cart__button">
                    <button></button>
                  </div>
                </div>
              </div>
              <div className="item-cart__slider slider">
                <div className="slider__wrapper">
                  <div className="slider__item">
                    <div className="slider__controls">
                      <button className="slider__button button">
                        <div className="button__arrow button__arrow_prev"></div>
                      </button>
                      <button className="slider__button button">
                        <div className="button__arrow button__arrow_next"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cart__item item-cart">
              <div className="item-cart__row">
                <div className="item-cart__info">
                  <div className="item-cart__text-block">
                    <div className="item-cart__title">Apollo</div>
                    <div className="item-cart__subtitle">Running Short</div>
                  </div>
                  <div className="common__price">$50.00</div>
                  <div className="item-cart__attribute">
                    <div className="common__label">size:</div>
                    <ul className="common__selection">
                      <li className="common__size _active">s</li>
                      <li className="common__size">xs</li>
                      <li className="common__size">xs</li>
                      <li className="common__size">xs</li>
                    </ul>
                  </div>
                  <div className="item-cart__attribute">
                    <div className="common__label">color:</div>
                    <ul className="common__selection">
                      <li className="common__color _active">
                        <div></div>
                      </li>
                      <li className="common__color">
                        <div></div>
                      </li>
                      <li className="common__color">
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-cart__controls">
                  <div className="item-cart__button item-cart__button_plus">
                    <button></button>
                  </div>
                  <div className="item-cart__amount">1</div>
                  <div className="item-cart__button">
                    <button></button>
                  </div>
                </div>
              </div>
              <div className="item-cart__slider slider">
                <div className="slider__wrapper">
                  <div className="slider__item">
                    <div className="slider__controls">
                      <button className="slider__button button">
                        <div className="button__arrow button__arrow_prev"></div>
                      </button>
                      <button className="slider__button button">
                        <div className="button__arrow button__arrow_next"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cart__item item-cart">
              <div className="item-cart__row">
                <div className="item-cart__info">
                  <div className="item-cart__text-block">
                    <div className="item-cart__title">Apollo</div>
                    <div className="item-cart__subtitle">Running Short</div>
                  </div>
                  <div className="common__price">$50.00</div>
                  <div className="item-cart__attribute">
                    <div className="common__label">size:</div>
                    <ul className="common__selection">
                      <li className="common__size _active">s</li>
                      <li className="common__size">xs</li>
                      <li className="common__size">xs</li>
                      <li className="common__size">xs</li>
                    </ul>
                  </div>
                  <div className="item-cart__attribute">
                    <div className="common__label">color:</div>
                    <ul className="common__selection">
                      <li className="common__color _active">
                        <div></div>
                      </li>
                      <li className="common__color">
                        <div></div>
                      </li>
                      <li className="common__color">
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-cart__controls">
                  <div className="item-cart__button item-cart__button_plus">
                    <button></button>
                  </div>
                  <div className="item-cart__amount">1</div>
                  <div className="item-cart__button">
                    <button></button>
                  </div>
                </div>
              </div>
              <div className="item-cart__slider slider">
                <div className="slider__wrapper">
                  <div className="slider__item">
                    <div className="slider__controls">
                      <button className="slider__button button">
                        <div className="button__arrow button__arrow_prev"></div>
                      </button>
                      <button className="slider__button button">
                        <div className="button__arrow button__arrow_next"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="cart__footer">
            <div className="cart__total">
              <div className="cart__result">
                <div className="cart__elem">Tax 21%:</div>
                <div className="cart__elem">Quantity:</div>
                <div className="cart__elem">Total:</div>
              </div>
              <div className="cart__result">
                <div className="cart__elem_black">$42.00</div>
                <div className="cart__elem_black">3</div>
                <div className="cart__elem_black">$200.00</div>
              </div>
            </div>
            <button className="common__btn">order</button>
          </div>
        </div>
      </div>
    );
  }
}
