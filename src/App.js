import React from 'react';


class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.state = {
      count: 0
    }
  }

  handleIncrement() {
    this.setState((preState)=>{
      return {
        count: preState.count + 1
      }
    })
  }

  handleDecrement() {
    this.setState((preState)=>{
      return {
        count: preState.count - 1
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}




export default Counter;
