import {createSlice} from "@reduxjs/toolkit";

export const appSlicer = createSlice({
    name: "app",
    initialState: {
        token: "",
    },
    reducers: {
        userLogin() {

        },
        getUserInfo() {

        },
        setToken(state, value) {
            state.token = value
        }
    }
})

export const {userLogin, getUserInfo} = appSlicer.actions;
