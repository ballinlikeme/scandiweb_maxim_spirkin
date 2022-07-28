import React, { Component } from "react";

import cn from "classnames";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class CategoryButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
    };
  }

  changeCurrentCategory = () => {
    const { dispatch } = this.props;
    dispatch({ type: "CHANGE_CATEGORY", payload: this.state.title });
  };

  render() {
    return (
      <Link to="/">
        <li
          onClick={this.changeCurrentCategory}
          className={cn("categories__item", {
            _active: this.state.title === this.props.currentCategory,
          })}
        >
          {this.state.title}
        </li>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return state.category;
};

export default connect(mapStateToProps)(CategoryButton);
