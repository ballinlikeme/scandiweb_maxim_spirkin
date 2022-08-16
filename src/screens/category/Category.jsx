import React, { Component } from "react";
import { connect } from "react-redux";
import ProductTile from "../../components/product-tile/ProductTile";

import { getProductsInCategory } from "../../query/products";
import cn from "classnames";

import "./category.scss";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

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
    if (prevProps !== this.props) {
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
            {this.props.category.currentCategory.toUpperCase()}
          </h2>
          <ul className="category-screen__list">
            {this.state.products.map((product, index) => {
              return <ProductTile key={index} product={product} />;
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
