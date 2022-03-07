import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function ProductsLoop() {
  const products = [
    {
      id: 1,
      title: "Headphone1",
      info: "HeadPhone-1 Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://www.rollingstone.com/wp-content/uploads/2021/03/38c939f6-9de6-4820-a288-f01bade3c88c.__CR001464600_PT0_SX1464_V1___-e1615438977719.jpg?resize=1800,1200&w=1800",
    },
    {
      id: 2,
      title: "Headphone-2",
      info: "HeadPhone-2 Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id: 3,
      title: "Headphone-3",
      info: " HeadPhone-3 Some quick example text to build on the card title and make up the bulk of the card's content.",
      image:
        "https://image.shutterstock.com/image-photo/flat-lay-composition-modern-gadgets-260nw-1674079216.jpg",
    },
  ];
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.info}</Card.Text>
                <Button variant="primary">Buy Me</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsLoop;
