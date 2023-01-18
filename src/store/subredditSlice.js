import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits} from '../api/reddit';

//setting initial state

const initialState ={
    subreddits: [],
    isLoading: false,
    error: false
}

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {

        startGetSubreddits(state, action){
            state.isLoading = true;
            state.error = false;
        },

        getSubredditFailed(state){
            state.isLoading = false;
            state.error = true;
        },

        getSubredditSuccess(state, action){
            state.isLoading = false;
            state.subreddits = action.payload;
        }
    }

})

//exporting the action from the ceated slice

export const {
    startGetSubreddits,
    getSubredditFailed,
    getSubredditSuccess
} = subredditSlice.actions;

//exporting the reducer

export default subredditSlice.reducer;

//Creating a redux Thunk that getes subreddits

export const fetchSubreddits = () => async (dispatch) => {
    try{
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditSuccess(subreddits));
    }catch(error){
        dispatch(getSubredditFailed());

    }
}

export const selectSubreddits = (state) => state.subreddits.subreddits;