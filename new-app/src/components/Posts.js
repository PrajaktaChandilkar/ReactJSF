import React from "react";
import { Card, Button } from "react-bootstrap";

function Posts() {
    // const[pocsts,]
  return (
    <div className="Posts">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Posts;
