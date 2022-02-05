import "../App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "../store/orderSlice";
import { counterActions2 } from "../store/index2";
import Foods from "../The foods/foods";
import { Link } from "react-router-dom";


let isFirst = true;
function Orderlist() {

  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  const onAdd = (txt) => {
    dispatch(orderActions.addTodo(txt));
  };

  const onRemove = (id) => {
    dispatch(orderActions.removeTodo(id));
  };

   useEffect(() => {
     if (!isFirst) {
       fetch(
         "https://mini-restaurant-29088-default-rtdb.firebaseio.com/m.json",
         {
           method: "PUT",
           body: JSON.stringify(orders),
         }
       );
     }
     isFirst = false;
   }, [orders]);

    useEffect(() => {
      fetch(
        "https://mini-restaurant-29088-default-rtdb.firebaseio.com/m.json"
      ).then(async (res) => {
        const data = await res.json();
        dispatch(orderActions.replaceTodos(data));
      });
    }, []);



const counter = useSelector((state) => state.a.counter2);
const increment = () => {
  dispatch(counterActions2.inc());
};
const increseBy = () => {
  dispatch(counterActions2.increseby(10));
};
 







  return (
    <div className="App">
<Link to="/">back</Link>

      <div>
        {orders.map((order) => {
          return (
            <div
              key={order.id} style={{margin: "10px",background: "grey",borderRadius: "15px",display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: "10px",}}
            >
              <h2>{order.image}</h2>
              {/* <img className="images"  src={order.image}/> */}
              <button onClick={() => {onRemove(order.id);}}>delete</button>
              <button onClick={() => {onAdd(order.text);}}>Add todo</button>

           <div>
              
         <h1>price{counter}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={increseBy}>increse by 10</button>

          </div>
          </div>
          );})}
           </div>
           </div>
  );
}

export default Orderlist;



