import React from "react";
import { StaticAttribute } from "../static-attributes/StaticAttribute";

import cn from "classnames";

export class CartOverlayAttribute extends StaticAttribute {
  render() {
    return (
      <div className="item-overlay__attribute">
        <div className="item-overlay__label">{this.props.attribute.name}:</div>
        <div className="item-overlay__values">
          {this.props.attribute.items.map((item) => {
            return (
              <div
                className={cn("item-overlay__value", {
                  _active: this.isEqual(item.value) || false,
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
