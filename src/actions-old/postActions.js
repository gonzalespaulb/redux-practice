import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => dispatch(finishFetchPosts(json)));
}

export const createNewPost = (newPost) => dispatch => {
    dispatch(addNewPost(newPost))
}

const finishFetchPosts = (posts) => {

    return {
        type: FETCH_POSTS,
        payload: posts,
    }
}

const addNewPost = (newPost) => {
    return {
        type: NEW_POST,
        payload: newPost,
    }
}