import { createSlice } from "@reduxjs/toolkit";

const initialorder = { orders: [] }

const orderReducer = createSlice({
    name: 'orders',
    initialState: initialorder,
    reducers: {
        addorder(state, action) {
            state.orders.unshift({ id: action.payload.id, text: action.payload.name, image: action.payload.image ,price:action.payload.price, quantity: 1})
        },
        removeTodo(state, action) {
            state.orders = state.orders.filter(todo => todo.id !== action.payload)
        },
        replaceTodos(state, action) {
            state.orders = action.payload;
        },
        incQ(state, action){
            const i = state.orders.findIndex(el => el.id === action.payload)
            state.orders[i].quantity = state.orders[i].quantity + 1
        },
        decQ(state, action){
            const i = state.orders.findIndex(el => el.id === action.payload)
            if (state.orders[i].quantity>1){state.orders[i].quantity = state.orders[i].quantity - 1}
            
        }
    }
})
export const orderActions = orderReducer.actions

export default orderReducer.reducer