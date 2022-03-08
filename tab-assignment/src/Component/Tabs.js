import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    
    super(props);
    this.state={
      tabName: ["Home", "About", "Feature"]
    
    }
  }
  render() {
    return (
      this.state.tabName.map((tab,index)=>
        <div className="tabs" key={index}>
          <div className="tab">
          {/* console.log(tab) */}
          <a href="">{tab.tabName}</a>
          </div>
        </div>
      )
        
      // <div className="app">
      //   <div className="browser">
      //     <div className="tabs">
      //       <div className="tab">
      //         <a href="">Home</a>
      //       </div>
      //       <div className="tab">
      //         <a href="">About</a>
      //       </div>
      //       <div className="tab">
      //         <a href="">Feature</a>
      //       </div>
      //     </div>
      //     <div className="viewport">Pages Go Here</div>
      //   </div>
      // </div>
    );
  }
}
export default Tabs;
