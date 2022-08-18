import React, { Component } from "react";
import CategoryButton from "../buttons/category-button/CategoryButton";

import { getAllCategories } from "../../graphql/categories";

import logo from "../../assets/logo.svg";
import "./header.scss";
import Actions from "../actions-component/Actions";

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
      categories,
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__container _container">
          <div className="header__categories categories">
            <ul className="categories__list">
              {this.state.categories.map((category, index) => {
                return (
                  <CategoryButton key={index} title={category.name} />
                );
              })}
            </ul>
          </div>
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <Actions />
        </div>
      </header>
    );
  }
}
