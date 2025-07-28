import { useState } from "react";

// Q6. Create a parent component that holds a number in state and passes it to a child component via props.

import ReceivedNum from "../childCom/ChildCom";

export const ParentComponent = () => {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNum) => prevNum + 1);
  }
  function decrement() {
    setNumber((prevNum) => prevNum - 1);
  }

  return (
    <>
      <h2>Parent Component</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={increment}>Increment</button>
        <p>Current number in parent state: {number}</p>
        <button onClick={decrement}>Decrement</button>
      </div>
      <ReceivedNum number={number} />
    </>
  );
};

export default ParentComponent;
