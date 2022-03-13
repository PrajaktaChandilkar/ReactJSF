import React, { useState, useEffect } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Posts.css";


// function ApiPosts()
function SinglePost() {
  const [post, setPost] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    // axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      // .then((response) => setPosts(response.data))
      // .catch((err) => console.log(err));

      //asyn await

      const fetchPost =async ()=>{
        try{
          const response =  await  axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          setPost(response.data)
  
        }catch(err){
          console.log(err)
        }
      }
      fetchPost()
      
  },[id]);
  return (
    <>
    <h1>Post No {post.id}</h1>
      {Object.keys(post).length ? (
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
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="post-btn">
                Like
              </Button>
              <Button variant="primary" className="post-btn">
                Comments
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated {Math.floor(Math.random() * 60)} mins ago
              </small>
            </Card.Footer>
          </Card>
        
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
}

export default SinglePost;
