import { createSlice } from "@reduxjs/toolkit";
const initState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
    addByAmount: (state, action) => { state.count += action.payload },
    reset: (state) => { state.count = 0 },
  }
})

export const { increment, decrement, addByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;