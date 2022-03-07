import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <div className="tab">
              <a href="">Home</a>
            </div>
            <div className="tab">
              <a href="">About</a>
            </div>
            <div className="tab">
              <a href="">Feature</a>
            </div>
          </div>
          <div className="viewport">Pages Go Here</div>
        </div>
      </div>
    );
  }
}
export default Tabs;
