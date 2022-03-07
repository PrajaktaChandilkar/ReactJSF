import React, { Component } from "react";

class HelloClassProps extends Component {
  render() {
    const { greetTo } = this.props;
    return (
      <>
        <h1>Hello {greetTo}</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
        voluptas earum aliquid! Aperiam quisquam odit, fugiat voluptatum iste
        eveniet. Aut facere ipsam beatae ex? Mollitia, quia sapiente!
        Repellendus, quasi animi! ded
      </>
    );
  }
}



export default HelloClassProps;
