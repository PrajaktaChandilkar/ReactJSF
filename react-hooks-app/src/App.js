import React, { useState } from "react";
import { Container, Button, ProgressBar } from "react-bootstrap";
import "./App.css";
import TableComponent from "./Component/TableComponent";
import IncrementButton from "./Component/IncrementButton"

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <Container className="App">
      {show && <TableComponent />}
      <Button variant="dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </Button>
      {/* <h1>{count}</h1> */}
      <br /> <br /> 
      <ProgressBar now={count} />
      <br />
      {/* //pass count and setCount argumet to the IncrementButton function */}
     <IncrementButton  count={count} setCount={setCount}/>
    </Container>
  );
}

export default App;
