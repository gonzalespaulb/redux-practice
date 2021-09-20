 import { combineReducers } from "redux";
 import postReducer from './postReducer';
 import isLoggedReducer from './isLoggedReducer';

 export default combineReducers({
     posts: postReducer, 
     loggedInStatus: isLoggedReducer,
 })