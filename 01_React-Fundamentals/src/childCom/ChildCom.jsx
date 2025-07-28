export const ReceivedNumValue = (props) => {
  // Receive the number via props
  const { number } = props;
  return (
    <>
      <p>Child Component</p>
      <p>Received Num from Parent Com: {number}</p>
    </>
  );
};

export const ReceivedFun = (props) => {
  // Receive the number via props
  const { number, increment, decrement } = props;
  return (
    <>
      <p>Child Component</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={increment}>Add</button>
        <p>Received Num from Parent Com: {number}</p>
        <button onClick={decrement}>Minus</button>
      </div>
    </>
  );
};
