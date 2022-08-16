import React from "react";
import {CartOverlayAttribute} from "./CartOverlayAttribute";
import cn from "classnames";

export class CartOverlayColorAttribute extends  CartOverlayAttribute {
  render() {
    return (
       <div className="item-overlay__attribute">
         <div className="item-overlay__label">Color:</div>
         <div className="item-overlay__values">
           {this.props.attribute.items.map((item, index) => {
             return (
                <div
                   key={index}
                   className={cn("item-overlay__color-value", {
                     "_active": this.isEqual(item.displayValue)
                   })}>
                  <div style={{
                    backgroundColor: item.value,
                  }}></div>
                </div>
             )
           })}
         </div>
       </div>
    )
  }
}