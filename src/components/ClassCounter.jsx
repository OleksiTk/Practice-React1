import { useState } from "react";
import React, { Component } from "react"; // додаємо React, тому що використовуємо JSX

class Counters extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
    this.Incherement = this.Incherement.bind(this);
  }
  Incherement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Incherement}>Incherement</button>
      </div>
    );
  }
}

export default Counters;
