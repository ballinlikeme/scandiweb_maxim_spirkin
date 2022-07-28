import React, { Component } from "react";

import cn from "classnames";

class Attributes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attribute: this.props.attribute,
      selectedValue: null,
    };
  }

  handleValueChange = (value) => {
    this.setState({
      selectedValue: value,
    });
    this.props.onSelectAttributes(this.state.attribute.name, value);
  };

  render() {
    return (
      <div className="product__item">
        <div className="product__label common__label">
          {this.state.attribute.name}:
        </div>
        <div className="common__selection">
          {this.state.attribute.items.map((item) => {
            return (
              <div
                key={item.value}
                onClick={() => this.handleValueChange(item.value)}
                className={cn("common__size", {
                  _active: item.value === this.state.selectedValue,
                })}
              >
                {item.value}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attributes;
