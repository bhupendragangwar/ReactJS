import "./App.css";
import {
  ToggleBtn,
  PassData,
  LiveUserTypes,
  Counter,
} from "./Components/StatesAndProps";
import ParentComponent from "./parents/ParentCom";

function App() {
  return (
    <>
      <h1>React Fundamentals - JSX | Components | Props and State</h1>
      <br />
      <ToggleBtn />
      <PassData name="JavaScript | ReactJS" />
      <LiveUserTypes />
      <Counter />
      <br />
      <ParentComponent />
    </>
  );
}

export default App;
