import { LOG_IN, LOG_OUT } from "../actions-old/types";

const initialState = {
    loggedInStatus: false,
}

export default (state = initialState, action) => {
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

