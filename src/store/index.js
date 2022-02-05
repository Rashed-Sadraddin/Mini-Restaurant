import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import counterSlice from "../store/index2";

const store = configureStore({
    reducer: { order: orderReducer, a: counterSlice },
});


export default store