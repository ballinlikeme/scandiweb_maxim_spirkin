import React from "react";

import cn from "classnames";

import Attributes from "./Attributes";

class ColorAttribute extends Attributes {
  constructor(props) {
    super(props);

    this.state = {
      attribute: this.props.attribute,
      selectedValue: null,
    };
  }

  render() {
    return (
      <div className="product__item">
        <div className="product__label common__label">color:</div>
        <div className="common__selection">
          {this.state.attribute.items.map((item) => {
            return (
              <div
                key={item.value}
                onClick={() => this.handleValueChange(item.displayValue)}
                className={cn("common__color", {
                  _active:
                    item.displayValue === this.state.selectedValue &&
                    this.isEqual(item.displayValue),
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

export default ColorAttribute;
