import "./App.css";
import {
  ToggleBtn,
  PassData,
  LiveUserTypes,
  Counter,
  DisplayList
} from "./Components/StatesAndProps";
import { ValuePass, FunctionPass } from "./parents/ParentCom";

function App() {
  return (
    <>
      <h1>React Fundamentals - JSX | Components | Props and State</h1>
      <br />
      <ToggleBtn />
      <PassData name="JavaScript | ReactJS" />
      <LiveUserTypes />
      <Counter />
      <hr />
      <ValuePass />
      <FunctionPass />
      <hr />
      <DisplayList />
    </>
  );
}

export default App;
