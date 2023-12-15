import React from 'react'
import {connect, useDispatch, useSelector} from "react-redux";
import {counterSlicer, decrement, increment, incrementByAmount} from "@/store/module/index.js";
import {createSlice} from "@reduxjs/toolkit";

const mapStatToProps = (state, ownProps) => (
    {value: state.counter.value}
)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => dispatch(decrement())
    }
}
export default connect(mapStatToProps, mapDispatchToProps)(Home)

export function Home({value, decrement}) {
    const selectedData = useSelector((state) => {
        state.counter.value
    })
    const dispatch = useDispatch()

    return (
        <div>
            <div>{value}</div>
            <button onClick={() => dispatch(increment())}>hook加</button>
            <button onClick={decrement}>减小
            </button>
        </div>)
}


