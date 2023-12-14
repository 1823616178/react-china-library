import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "@/store/module/index.js";

export function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {
                dispatch(increment())
            }}>增加
            </button>
            <button onClick={
                () => {
                    dispatch(incrementByAmount())
                }
            }>减小
            </button>
        </div>
    )
}
