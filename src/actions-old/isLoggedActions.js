import { LOG_IN, LOG_OUT } from "./types";


export const logIn = (loginStatus) => dispatch => {
    dispatch(setLoginTrue(loginStatus));
}

export const logOut = (loginStatus) => dispatch => {
    dispatch(setLoginFalse(loginStatus));
}

const setLoginTrue = (loginStatus) => {
    return {
        type: LOG_IN,
        payload: loginStatus,
    }
}

const setLoginFalse = (loginStatus) => {
    return {
        type: LOG_OUT,
        payload: loginStatus,
    }
}