import { FETCH_POSTS, NEW_POST } from "../actions-old/types";

const initialState = {
    posts: [],
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:

            return {
                ...state, 
                posts: action.payload,
            }

        case NEW_POST: {

            return {
                ...state, 
                posts: [...state.posts, action.payload],
            }
        }
        default: 
            return state;
    }
}

export default postReducer;