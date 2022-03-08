import "./App.css";
import React, { Component } from "react";
import NavbarComponent from "./component/NavbarComponent/NavbarComponent";
import Product2 from "./component/Product2/Product2";
import ProductsLoop from "./component/Products/ProductsLoop";
import {Button} from 'react-bootstrap'
 // import Product3 from './component/Product3/Product3'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      show: true
    }
  }
  showHide = () =>{
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <h1 className="display-5">Welcome To Our site</h1>
        <p className="lead">Feel free to explore...</p>
        {/* <ProductsLoop /> */}
        <Button variant="success"  className="show-hide-btn" onClick ={this.showHide}>
          {`${this.state.show ? 'Hide' : 'Show'} Products`}
        </Button>
        {this.state.show && <Product2 />}
        {/* <Product2 /> */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <NavbarComponent />
//       <h1 className='display-5'>Welcome To Our site</h1>
//       <p className='lead'>Feel free to explore...</p>
//       {/* <ProductsLoop /> */}
//       <Product2 />
//     </div>
//   );
// }

export default App;
