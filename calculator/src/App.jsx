import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className="calculator">
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
