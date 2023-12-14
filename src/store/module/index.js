import {createSlice} from "@reduxjs/toolkit";

export const counterSlicer = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        todos: [1, 2, 3]
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlicer.actions;
