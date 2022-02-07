import "../App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "../store/orderSlice";
import Foods from "../The foods/foods";
import { Link ,NavLink} from "react-router-dom";
import { FileProtectOutlined } from "@ant-design/icons";


let isFirst = true;
const Home=()=> {

    

     const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  <colgroup></colgroup>

  const onAdd = (txt) => {
    dispatch(orderActions.addorder(txt));
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


const [b,b2]=useState(true)
 const added=()=>{
    b2(prev => !prev)}


 const onRemove = (id) => {
    dispatch(orderActions.removeTodo(id));
  };


  return (
    <div className="">
      <header className="App-header">
        <h1 style={{margin:"0px 30px 0px 210px",width:""}}>Wellcome to our mini-restaurant page</h1>
        
        <div className="orderlist"><Link to="/orderlist">
          
          <h1 style={{margin:"0px 30px 0px 0px"}}>
            <FileProtectOutlined style={{color: "#5a5a5a"}}/>
          </h1>
          </Link> <p style={{margin:"0px 50px 0px 0px"}}>Orderlist</p>
          </div>
       
      </header>
 
      <div className="all_foods">{Foods.map((food) => {
          return (
            <div className="food_card">
            
              <img className="images"  src={food.image}/>
              <h3>{food.name}</h3>
              {/* <p>{food.category}</p> */}
              <p>{food.price} ID</p>
              <button onClick={() => {onAdd(food.name);added();}}>
                {b?<b>Add to list</b>:<b style={{color:"#00d9ff"}}>Added</b>}
              </button> 
            </div>);})}
            
          </div>
   
    </div>
  );
}

export default Home;
