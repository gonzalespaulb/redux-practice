import { LOG_IN, LOG_OUT } from "../actions-old/types";

const initialState = {
    loggedInStatus: false,
}

const isLoggedReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:

            return {
                ...state, 
                loggedInStatus: action.payload,
            }

        case LOG_OUT: {

            return {
                ...state, 
                loggedInStatus: action.payload,
            }
        }
        default: 
            return state;
    }
}

export default isLoggedReducer;