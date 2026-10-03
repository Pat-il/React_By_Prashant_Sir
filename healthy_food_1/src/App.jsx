import { useState } from "react";
import ErrMsg from "./components/ErrMsg";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      let newFoodItems = event.target.value;
      setFoodItems([...foodItems, newFoodItems]);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrMsg foodItems={foodItems} />
      <FoodInput handleKeyDown={onKeyDown} />
      <FoodItems foodItems={foodItems} />
    </Container>
  );
}

export default App;
