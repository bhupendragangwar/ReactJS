import { useState } from "react";

// Q6. Create a parent component that holds a number in state and passes it to a child component via props.
// Q7. Use props to pass a callback function from parent to child, and trigger it from the child.

import { ReceivedNumValue, ReceivedFun } from "../childCom/ChildCom";

export const ValuePass = () => {
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
      <ReceivedNumValue number={number} />
    </>
  );
};

export const FunctionPass = () => {
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
        <p>Current number in parent state: {number}</p>
      </div>
      <ReceivedFun
        increment={increment}
        decrement={decrement}
        number={number}
      />
    </>
  );
};
