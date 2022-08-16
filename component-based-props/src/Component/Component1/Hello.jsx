import React, { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <h1>Hello {this.props.greetTo}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad
          iste, rem, beatae nisi, non deserunt consequuntur praesentium ducimus
          officiis explicabo. Facere quibusdam alias quis unde tempore ipsam,
          atque expedita!
        </p>
      </div>
    );
  }
}

export default Hello;