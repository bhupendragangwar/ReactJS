import "./App.css";
import {
  // ToggleBtn,
  // PassData,
  // LiveUserTypes,
  // Counter,
  // DisplayList,
  // CondRen,
//  ObjectPass
} from "./Components/StatesAndProps";
// import { ValuePass, FunctionPass } from "./parents/ParentCom";

import Form from "./form/FormData";

function App() {
  const isLogged = true;

  const userDetails = {
    name : 'Rohit',
    surName: 'Kumar',
    age : 19,
    email : 'test@gmail.com'
  }
  return (
    <>
      <h1>React Fundamentals - JSX | Components | Props and State</h1>
      {/* <br />
      <ToggleBtn />
      <PassData name="JavaScript | ReactJS" />
      <LiveUserTypes />
      <Counter />
      <hr />
      <ValuePass />
      <FunctionPass />
      <hr />
      <DisplayList />
      <hr />
      <CondRen isLogged = {isLogged}/>
      <hr /> */}
      <Form />
      <hr />
      {/* <ObjectPass userDetails = {userDetails}/> */}
    </>
  );
}

export default App;
