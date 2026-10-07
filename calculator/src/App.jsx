import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  let onButtonClicked = (buttonText) => {
    if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "C") {
      setCalVal("");
    } else {
      let result = calVal + buttonText;
      setCalVal(result);
    }
  };

  return (
    <div className="calculator">
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClicked={onButtonClicked} />
    </div>
  );
}

export default App;
