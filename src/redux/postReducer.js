import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(''{

})

export const postSlice = createSlice({

    name: `posts`,
    initialState: {
        posts: [],
        status: `idle`,
        error: null, 
    },

    reducers: {
        fetchPosts: (state, action) => {
            
        }
    }
})