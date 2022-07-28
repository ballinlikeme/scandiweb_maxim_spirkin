import React, { Component } from "react";
import CategoryButton from "../buttons/category-button/CategoryButton";

import { getAllCategories } from "../../query/categories";

import logo from "../../assets/logo.svg";
import "./header.scss";
import Actions from "../actions/Actions";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getAllCategories();

    this.setState({
      categories: categories,
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__container _container">
          <div className="header__categories categories">
            <ul className="categories__list">
              {this.state.categories.map((category) => {
                return (
                  <CategoryButton key={category.name} title={category.name} />
                );
              })}
            </ul>
          </div>
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <Actions />
        </div>
      </header>
    );
  }
}
