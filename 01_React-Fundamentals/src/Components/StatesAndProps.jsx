// Q1. Create a functional component that uses useState to toggle between “ON” and “OFF” on a button click.

import { useState } from "react";

export const ToggleBtn = () => {
  const [state, setState] = useState("OFF");

  function handleState() {
    setState((prevState) => (prevState === "ON" ? "OFF" : "ON"));
  }
  return (
    <>
      <button onClick={handleState}>{state}</button>
    </>
  );
};

// Q2. Pass a string value from a parent component to a child using props and display it.
// Q3. Create a component that takes a name prop and displays “Hello, {name}”.
export const PassData = ({ name }) => {
  return (
    <>
      <h2>Hell0, {name}</h2>
    </>
  );
};

// Q4. Use useState to store an input field value and show it live as the user types.

export const LiveUserTypes = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>Text Here: {text}</p>
    </div>
  );
};

// Q5. Build a simple counter component with “+” and “-” buttons using useState.

export const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementHandle() {
    setCount(count + 1);
    console.log(setCount((prevState) => prevState + 1));
  }

  function decrementHandle() {
    setCount(count - 1);
    console.log(setCount((prevState) => prevState - 1));
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={incrementHandle}>Increment(+)</button>
      <p>{count}</p>
      <button onClick={decrementHandle}>Decrement(-)</button>
    </div>
  );
};

// Q8. Create a list of items using state and display them using map().

const listOfItems = [
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "Express.JS",
  "HTML",
  "CSS",
];

export const DisplayList = () => {
  const [items, setItems] = useState(listOfItems);
  return (
    <div>
      {items.map((item, index) => (
        <ul>
          <li key={index}>{item}</li>
        </ul>
      ))}
    </div>
  );
};
