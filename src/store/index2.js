import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter2: 0 },
    reducers: {
        inc(state) {
            state.counter2 += 1;
        },
        increseby(state, action) {
            state.counter2 += action.payload;
        },
    },
});

export const counterActions2 = counterSlice.actions;

export default counterSlice.reducer;