import { createSlice } from "@reduxjs/toolkit";

const initialTodo = { orders: [] }

const orderReducer = createSlice({
    name: 'orders',
    initialState: initialTodo,
    reducers: {
        addTodo(state, action) {
            state.orders.unshift({ id: Math.round(Math.random() * 10000000), text: action.payload, image: action.payload })
        },
        removeTodo(state, action) {
            state.orders = state.orders.filter(todo => todo.id !== action.payload)
        },
        replaceTodos(state, action) {
            state.orders = action.payload;
        },
    }
})
export const orderActions = orderReducer.actions

export default orderReducer.reducer