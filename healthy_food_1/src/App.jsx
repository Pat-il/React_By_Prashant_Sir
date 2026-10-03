import ErrMsg from "./components/ErrMsg";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Sabzi", "Green Veg", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrMsg foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  );
}

export default App;
