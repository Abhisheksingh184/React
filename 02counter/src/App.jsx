import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5);

  // let counter=5
  const addvalue = () => {
    // counter=counter+1
    if (counter < 20) setcounter(counter + 1);
  };
  const removevalue = () => {
    if (counter > 0) setcounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  );
}

export default App;
