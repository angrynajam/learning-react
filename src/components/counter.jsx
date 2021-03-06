import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
