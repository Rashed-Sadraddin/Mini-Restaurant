import "../App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "../store/orderSlice";
import Foods from "../The foods/foods";
import { Link } from "react-router-dom";

let isFirst = true;
function Home() {

    

     const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  const onAdd = (txt) => {
    dispatch(orderActions.addTodo(txt));
  };
  const onInput = (e) => {
    setInputText(e.target.value);
  };


  useEffect(() => {
    if (!isFirst) {
      fetch(
        "https://mini-restaurant-29088-default-rtdb.firebaseio.com/m.json",
        {
          method: "PUT",
          body: JSON.stringify(orders),
        }
      )}
    isFirst = false;
  }, [orders]);


 

  return (
    <div className="App">
      <Link to="/orderlist">orderlist</Link>
 
      <div className="all_foods">{Foods.map((food) => {
          return (
            <div className="food_card">
            
              <img className="images"  src={food.image}/>
              <p>{food.name}</p>
              <p>{food.category}</p>
              <p>{food.price}</p>
              <button onClick={() => {onAdd(food.image);}}>Add todo</button>
            </div>);})}
            
          </div>
   
    </div>
  );
}

export default Home;


