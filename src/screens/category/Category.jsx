import React, { Component } from "react";
import { connect } from "react-redux";
import ProductTile from "./product-tile/ProductTile";

import { getProductsInCategory } from "../../query/products";

import "./category.scss";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  getProducts = async () => {
    const result = await getProductsInCategory(this.props.currentCategory);
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
      <div className="category-screen">
        <div className="category-screen__container _container">
          <h2 className="category-screen__title">
            {this.props.currentCategory.toUpperCase()}
          </h2>
          <ul className="category-screen__list">
            {this.state.products.map((product) => {
              return <ProductTile key={product.name} product={product} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.category;
};

export default connect(mapStateToProps)(Category);
