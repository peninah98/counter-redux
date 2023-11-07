import { createSlice } from "@reduxjs/toolkit";
const initialValue = 0;
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: initialValue },
  reducers: {
    increment: (state: { value: number }) => {
      state.value += 1;
    },
    decrement: (state: { value: number }) => {
      state.value -= 1;
    },
    reset: (state: { value: number }) => {
      state.value = initialValue;
    },
  },
});

export const { reset, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
