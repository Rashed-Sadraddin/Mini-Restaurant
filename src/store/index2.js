import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter2: 1 },
    reducers: {
        inc(state) {
            state.counter2 += 1;
        },
        increseby(state, action) {
            state.counter2 -= 1;
        },
    },
});

export const counterActions2 = counterSlice.actions;

export default counterSlice.reducer;