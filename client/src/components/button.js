import React, { Component } from 'react';


export default class Button extends Component {

  constructor() {
    super();
    this.state = {
      buttonValue: 0
    }
  }

  handleClick = () => {
    this.setState({buttonValue: this.state.buttonValue + 1})
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.buttonValue}</button>
    )
  }

}
