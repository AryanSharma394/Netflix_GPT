import { createSlice } from "@reduxjs/toolkit";

const toggleslice = createSlice({
    name : "toggle",
    initialState :{
        togglestate :false,
        movieresults : null,
        movienames : null,

    },
    reducers : {
        toggleGptSearch :(state)=>{
            state.togglestate = !state.togglestate;
        },  
        GptResultMovies :(state,action)=>{
            state.movieresults = action.payload;
        },
        GptMoviesName : (state,action)=>{
            state.movienames = action.payload;
        }
    }

});

export const {toggleGptSearch,GptResultMovies,GptMoviesName} = toggleslice.actions;

export default toggleslice.reducer;