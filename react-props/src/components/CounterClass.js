import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
         counter : 0,
    }
  }
  incrementCounter = () =>{
      this.setState ((prevState)=>({
          counter:prevState.counter+1
      }))
  }

  decrementCounter = () =>{
      this.setState({
          counter:this.state.counter-1
      })
  }

  incrementCounter3 = () =>{
    //   this.state({})
        //   counter:this.state.counter+3
         this.incrementCounter()
         this.incrementCounter()
         this.incrementCounter()
      
  }
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "10em" }}>{ this.state.counter }</h1>
        <button onClick={ this.incrementCounter } style={{cursor:'pointer'}}>Increment</button>
        <br /><br />
        <button onClick={ this.decrementCounter } style={{cursor:'pointer'}}>Decrement</button>
        <br /><br />
        <button onClick={ this.incrementCounter3} style={{cursor:'pointer'}}>Counter3</button>
      </div>
    );
  }
}

export default CounterClass;
