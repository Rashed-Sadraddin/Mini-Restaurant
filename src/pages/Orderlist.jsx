import "../App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "../store/orderSlice";
import { counterActions2 } from "../store/index2";
import Foods from "../The foods/foods";
import { Link } from "react-router-dom";
import { LeftSquareOutlined } from "@ant-design/icons";

let isFirst = true;
function Orderlist() {

  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  const onAdd = (txt) => {
    dispatch(orderActions.addorder(txt));
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
    <div className="">

<header className="App-header">
        <div className="home"><Link to="/">
          <h1 style={{margin:"0px"}}>
            <LeftSquareOutlined style={{color: "#5a5a5a",margin:"60px 30px 0px 30px"}}/>
          </h1>
          </Link>
          </div>
      </header>
      <div>
        {orders.map((order) => {
          return (
            <div
              key={order.id} style={{margin: "10px",background: "#68b6ff",borderRadius: "10px",display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-between",padding: "10px",}}
            >
              <h2>{order.image}</h2>
              
           <div>
              
         <p>Quantity-({counter})</p>
          <button onClick={increment}>Increse</button>
          <button onClick={increseBy}>Decrese</button>
          <button onClick={() => {onRemove(order.id);}}>Delete</button>
          </div>
          </div>
          );})}
           </div>
           <p>Total price</p>
           <p> {counter} ID</p>
           </div>
  );
}

export default Orderlist;



