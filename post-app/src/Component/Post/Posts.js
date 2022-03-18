import React, { useState, useEffect } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Post.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  },[]);

  return (
    <>
      {posts.length ? (
        posts.map((post) => (
          <Card
            className="post"
            border="dark"
            bg="dark"
            text="light"
            key={post.key}
          >
            <Card.Header>
              <small className="text-muted">User {post.userId}</small>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <Link className="router-lonk" to={`posts/${post.id}`}>
                  {post.title}
                </Link>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="btn">
                Like
              </Button>
              <Button variant="primary" className="btn">
                Comments
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {Math.floor(Math.random()*60)} mins ago</small>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

export default Posts;
