import React, { Component } from "react";

import Attributes from "../../components/attributes/Attributes";
import ColorAttribute from "../../components/attributes/ColorAttribute";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../query/product";

import "./product.scss";
import "../../scss/common.scss";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      name: "",
      gallery: [],
      prices: [],
      attributes: [],
      description: "",
      currentAttributes: [],
    };
  }

  onSelectAttributes = (attributeName, value) => {
    const duplicate = this.state.currentAttributes.find((attribute) => {
      return attribute.name === attributeName;
    });

    console.log(duplicate);

    let attributes = this.state.currentAttributes;
    const payload = { name: attributeName, value: value };

    if (duplicate) {
      const index = this.state.currentAttributes.findIndex((attribute) => {
        return attribute.name === payload.name;
      });

      console.log(index);

      attributes[index] = payload;
      this.setState({
        currentAttributes: attributes,
      });
      return;
    }

    attributes.push(payload);

    this.setState({
      currentAttributes: attributes,
    });
  };

  async componentDidMount() {
    const result = await getProductDetails(this.props.params.id);

    this.setState({
      brand: result.data.product.brand,
      name: result.data.product.name,
      gallery: result.data.product.gallery,
      prices: result.data.product.prices,
      attributes: result.data.product.attributes,
      description: result.data.product.description,
    });
  }

  getPrice = () => {
    const currencies = this.state.prices;
    if (currencies.length > 0) {
      const currentCurrency = this.props.currency.currentCurrency;

      const currentPrice = currencies.filter((item) => {
        return item.currency.label === currentCurrency;
      });

      return currentPrice[0].amount;
    }
    return "";
  };

  onSubmit = () => {
    if (this.state.currentAttributes.length < this.state.attributes.length) {
      alert("выберите все аттрибуты");
      return;
    } else {
      alert("vse good");
    }

    const payload = {
      brand: this.state.brand,
      name: this.state.name,
      prices: this.state.prices,
      attributes: this.state.attributes,
      selectedAttributes: this.state.currentAttributes,
      amount: 1,
    };

    console.log("this.state.currentAttributes", this.state.currentAttributes);

    const { dispatch } = this.props;
    dispatch({ type: "ADD_PRODUCT", payload: payload });
    this.setState({
      currentAttributes: [],
    });
  };

  render() {
    if (this.state.attributes.length > 0) {
      return (
        <div className="product">
          <div className="product__container _container">
            <div className="product__images images">
              <div className="images__small">
                {this.state.gallery.slice(0, 3).map((image) => {
                  return <img key={image} src={image} alt="Product" />;
                })}
              </div>
              <div className="images__big">
                <img src={this.state.gallery[0]} alt="Product" />
              </div>
            </div>
            <div className="product__information">
              <div className="product__textblock">
                <div className="product__title">{this.state.brand}</div>
                <div className="product__subtitle">{this.state.name}</div>
              </div>
              <div className="product__attributes">
                {this.state.attributes.map((attribute) => {
                  if (attribute.name === "Color") {
                    return (
                      <ColorAttribute
                        key={attribute.name}
                        onSelectAttributes={this.onSelectAttributes}
                        attribute={attribute}
                      />
                    );
                  } else {
                    return (
                      <Attributes
                        key={attribute.name}
                        onSelectAttributes={this.onSelectAttributes}
                        attribute={attribute}
                      />
                    );
                  }
                })}
              </div>
              <div className="product__price">
                <div className="price__label common__label">price:</div>
                <div className="common__price">
                  {this.props.currency.currentCurrencySymbol}
                  {this.getPrice()}
                </div>
              </div>
              <div className="product__button">
                <button
                  onClick={this.onSubmit}
                  className="common__btn common__btn__big"
                >
                  add to cart
                </button>
              </div>
              <div className="product__text">{this.state.description}</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="product">
        <div className="product__container _container">
          <div className="product__images images">
            <div className="images__small">
              {this.state.gallery.slice(0, 3).map((image) => {
                return <img src={image} alt="Product" />;
              })}
            </div>
            <div className="images__big">
              <img src={this.state.gallery[0]} alt="Product" />
            </div>
          </div>
          <div className="product__information">
            <div className="product__textblock">
              <div className="product__title">{this.state.brand}</div>
              <div className="product__subtitle">{this.state.name}</div>
            </div>
            <div className="product__price">
              <div className="price__label common__label">price:</div>
              <div className="common__price">
                {this.props.currency.currentCurrencySymbol}
                {this.getPrice()}
              </div>
            </div>
            <div className="product__button">
              <button
                onClick={this.onSubmit}
                className="common__btn common__btn__big"
              >
                add to cart
              </button>
            </div>
            <div className="product__text">{this.state.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, currency } = state;
  return {
    cart,
    currency,
  };
};

export default connect(mapStateToProps)(withParams(Product));
