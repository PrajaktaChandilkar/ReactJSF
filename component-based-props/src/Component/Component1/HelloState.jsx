import React, { Component } from "react";

class HelloState extends Component {
    constructor(props){
        super(props)

        this.state = {
            greetTo: "India"
        }

        // this.setState ={
        //     greetAlsoTo :"abc"
        // }
    }
    changeGreetTo = () =>{
        this.setState({
            greetTo:"abcx"
        })
        // console.log("i am in function changeGreetTo")
    }
  render() {
    return (
      <div className="HelloState">
        <h1>hii {this.state.greetTo}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          ipsum recusandae inventore voluptatem suscipit quos quaerat sed, a
          neque modi dolore nam mollitia alias doloribus eveniet odit
          laudantium. Odio, autem.
        </p>
        <button onClick={this.changeGreetTo}>click me to change</button>
      </div>
    );
  }
}
export default HelloState;