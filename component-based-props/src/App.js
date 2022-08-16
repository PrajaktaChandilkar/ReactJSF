import "./App.css";
import React, { Component } from "react";
import Hello from "./Component/Component1/Hello";
import HelloState from "./Component/Component1/HelloState";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>hii</h1> */}
        <Hello  greetTo = "India"/>
        <Hello  greetTo = "Indoneshia"/>
        <HelloState greetTo = "abc" />
      </div>
    );
  }
}

export default App;
