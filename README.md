# Redux 4 Dummies 

## Why use Redux?
Due to the nature of React's one way data flow, same level components are not able to share functionality
and data without lifting state. As applications get bigger more components are implemented therefore system 
complexity rises exponentially. To solve this problem, a global state (Redux) can be used all around the application 
without passing down props. This in turn allows for easier maintenance and addition of new features. 

## Store 
The "store" acts as a global state of the application. 

## Action
"Action" is in its simplest term is a function that returns an object.

## Reducer 
"Reducers" will check which action was used and modify the store / global state accordingly. 

## Dispatch

## Boiler Plate - Steps to setting up old skool Redux

1. import { createStore } from 'redux';

2. Create an action. 
The property "type" can also be called "name". But basically is just what your action is called. 
```
    const finishFetchPosts = (posts) => {
        return {
            type: FETCH_POSTS,
            payload: posts,
        }
    }
```

3. Set up a reducer
```
    const initialState = {
        posts: [],
    }
    
    export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:

            return {
                ...state, 
                posts: action.payload,
            }
        default: 
            return state;
    }
}
```