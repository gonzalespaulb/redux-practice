import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";
import postReducer from "./postReducer";

export default configureStore({
    reducer: {
        login: loginReducer,
        posts: postReducer,
    }
})