import React, { Component } from "react";

import cn from "classnames";

export class StaticAttribute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attribute: this.props.attribute,
      selectedAttributes: this.props.selectedAttributes,
    };
  }

  isEqual(value) {
    if (value) {
      const currentAttribute = this.props.selectedAttributes.find((elem) => {
        return elem.name === this.state.attribute.name;
      });

      return value === currentAttribute?.value ? true : false;
    }
  }

  render() {
    return (
      <div className="product__item">
        <div className="product__label common__label">
          {this.props.attribute.name}:
        </div>
        <div className="common__selection">
          {this.props.attribute.items.map((item, index) => {
            return (
              <div
                key={index}
                className={cn("common__size", {
                  _active: this.isEqual(item.value),
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
