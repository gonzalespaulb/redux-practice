import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: `login`,
    initialState: {
        isLoggedIn: false,
    }, 
    reducers : {
        logIn: (state) => {
            state.isLoggedIn = true;
        },

        logOut: (state) => {
            state.isLoggedIn = false;
        }
    }
})

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
