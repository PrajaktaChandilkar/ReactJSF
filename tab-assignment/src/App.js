import React, { Component } from "react";
import "./App.css";
import Tabs from './Component/Tabs'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //   tabName: ["Home", "About", "Feature"]
    // }
  }

  render() {
    return (
      <div className="app">
        <div className="browser">
          {/* <Tabs tabName={this.state.tabName} /> */}
          <Tabs />
          <div className="viewport" />
        </div>
      </div>
      //normal html code
      // 
    );
  }
}
export default App;
