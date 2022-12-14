import React, { Component } from "react";
import { connect } from "react-redux";
import ProductTile from "../../components/product-tile/ProductTile";

import { getProductsInCategory } from "../../graphql/products";
import cn from "classnames";

import "./category.scss";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  getProducts = async () => {
    const result = await getProductsInCategory(
      this.props.category.currentCategory
    );
    this.setState({
      products: result,
    });
  };

  async componentDidMount() {
    this.getProducts();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.getProducts();
    }
  }

  render() {
    return (
      <div
        className={cn("category-screen", {
          _active: this.props.overlay.isOpened,
        })}
      >
        <div className="category-screen__container _container">
          <h2 className="category-screen__title">
            {this.capitalizeFirstLetter(this.props.category.currentCategory)}
          </h2>
          <ul className="category-screen__list">
            {this.state.products.map((product) => {
              return <ProductTile key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { category, overlay } = state;
  return {
    category,
    overlay,
  };
};

export default connect(mapStateToProps)(Category);
