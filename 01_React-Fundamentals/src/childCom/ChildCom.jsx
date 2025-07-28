export const ReceivedNum = (props) => {
  // Receive the number via props
  const { number } = props;
  return (
    <>
      <p>Child Component</p>
      <p>Received Num from Parent Com: {number}</p>
    </>
  );
};

export default ReceivedNum;
