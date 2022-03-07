import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

function Products() {
  
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <div className="Products">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.rollingstone.com/wp-content/uploads/2021/03/38c939f6-9de6-4820-a288-f01bade3c88c.__CR001464600_PT0_SX1464_V1___-e1615438977719.jpg?resize=1800,1200&w=1800"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Buy Me</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="Products">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Buy Me</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4}>
          <div className="Products">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://image.shutterstock.com/image-photo/flat-lay-composition-modern-gadgets-260nw-1674079216.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Buy ME</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
