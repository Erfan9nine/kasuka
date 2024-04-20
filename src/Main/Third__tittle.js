import React, { Component } from "react";
import "./Tird.css";
export default class Third__tittle extends Component {
  render() {
    return (
      <div>
        
        <div className="third__tittle-products">
          <i>{this.props.children}</i>
          <h2>درد های بزرگ </h2>
          <p>
            آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند
            ، آنها کسانی هستند که در خدمات خود مقصر هستند
          </p>
        </div>
      </div>
    );
  }
}
