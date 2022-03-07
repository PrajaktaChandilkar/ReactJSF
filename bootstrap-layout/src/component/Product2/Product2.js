import React, { Component } from "react";

import { Card, Container, Button, Row, Col, Spinner } from "react-bootstrap";
import "./Product2.css";
export class Product2 extends Component {
  constructor(props) {
    super(props);
    console.log("Inside the constructor");
    this.state = {
      // count:0
      products: [],
    };
  }

  componentDidMount() {
    console.log("inside mount");
    setTimeout(() => {
      this.setState({
        // count:1
        products: [
          {
            id: 1,
            title: "Headphone1",
            info: "HeadPhone-1 Some quick example text to build on the card title and make up the bulk of the card's content.",
            image:
              "https://www.rollingstone.com/wp-content/uploads/2021/03/38c939f6-9de6-4820-a288-f01bade3c88c.__CR001464600_PT0_SX1464_V1___-e1615438977719.jpg?resize=1800,1200&w=1800",
            addedToCart: false,
          },
          {
            id: 2,
            title: "Headphone-2",
            info: "HeadPhone-2 Some quick example text to build on the card title and make up the bulk of the card's content.",
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            addedToCart: false,
          },
          {
            id: 3,
            title: "Headphone-3",
            info: " HeadPhone-3 Some quick example text to build on the card title and make up the bulk of the card's content.",
            image:
              "https://image.shutterstock.com/image-photo/flat-lay-composition-modern-gadgets-260nw-1674079216.jpg",
            addedToCart: false,
          },
          // {
          //   id: 4,
          //   title: "Headphone-3",
          //   info: " HeadPhone-3 Some quick example text to build on the card title and make up the bulk of the card's content.",
          //   image:
          //     "https://image.shutterstock.com/image-photo/flat-lay-composition-modern-gadgets-260nw-1674079216.jpg",
          //   addedToCart: false,
          // },
        ],
      });
    }, 2000);
    //use nthsione than because setState is Asynchronous
    //   this.setState({
    //       count:1
    //   })
  }

  addtoCartFunction(id) {

    //[SUITABLE FOR THIS SITUATION - NOT RECOMMENDDED] 
    // let updatedProducts = this.state.products;
    // updatedProducts[id - 1].addedToCart = true;


    //way 1
    let updatedProducts = this.state.products.map(product=>{
      if(product.id === id)
        product.addedToCart = true
      return product
    })
    this.setState({
      products: updatedProducts,
    });
  }
  render() {
    console.log("Inside the render");
    return (
      <>
        {/* // return <h2>Customer : {this.state.count}</h2>; */}
        <Container>
          {this.state.products.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            <Row>
              {this.state.products.map((product) => (
                <Col md={4} key={product.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.info}</Card.Text>
                      <Button variant="primary" className="buy-button">
                        BUY{" "}
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => this.addtoCartFunction(product.id)} //whenever we want to send arguments we have to use call back
                      >
                        {product.addedToCart ? "ADDED TO CART" : "ADD TO CART"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </>
    );
  }
}

export default Product2;
