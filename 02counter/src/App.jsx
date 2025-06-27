import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addvalue = () => {
    setCounter(counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addvalue}>Add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
