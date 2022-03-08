import { Button } from "react-bootstrap";
import React,{useState} from "react";

function IncrementButton({count,setCount}) {
    // const [count, setCount] = useState(0)
  return (
    <div>
      <Button variant="dark" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <br></br>
      <br></br>
      <Button variant="dark" onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
    </div>
  );
}

export default IncrementButton