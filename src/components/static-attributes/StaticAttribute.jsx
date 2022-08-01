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
    const currentAttribute = this.state.selectedAttributes.find((elem) => {
      return elem.name === this.state.attribute.name;
    });

    console.log(currentAttribute, "ca");
    return value === currentAttribute.value ? true : false;
  }

  componentDidMount() {
    console.log(this.state);
  }

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
