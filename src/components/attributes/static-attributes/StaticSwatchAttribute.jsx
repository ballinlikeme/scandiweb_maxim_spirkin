import React from "react";

import { StaticAttribute } from "./StaticAttribute";

import cn from "classnames";

export class StaticSwatchAttribute extends StaticAttribute {
  constructor(props) {
    super(props);

    this.state = {
      attribute: this.props.attribute,
      selectedAttributes: this.props.selectedAttributes,
    };
  }

  render() {
    return (
      <div className="product__item">
        <div className="product__label common__label">color:</div>
        <div className="common__selection">
          {this.state.attribute.items.map((item, index) => {
            return (
              <div
                key={index}
                className={cn("common__color", {
                  _active: this.isEqual(item.displayValue),
                })}
              >
                <div
                  style={{
                    backgroundColor: item.value,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
