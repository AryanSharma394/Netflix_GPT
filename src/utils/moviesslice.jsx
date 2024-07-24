import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState : {
        nowplayingmovies : null,
        addmovietrailer :null,
        addpopularmovies :null,
        addtopratedmovies :null,
        addupcomingmovies: null
    },
    reducers : {
        addnowplayingmovies :(state,action)=>{
           state.nowplayingmovies = action.payload;
        },
        addmovietrailer : (state,action)=>{
            state.addmovietrailer = action.payload;
        },
        addpopularmovies :(state,action)=>{
            state.addpopularmovies = action.payload;
        },
        addtopratedmovies :(state,action) =>{
            state.addtopratedmovies = action.payload;
        },
        addupcomingmovies :(state,action) =>{
            state.addupcomingmovies = action.payload;
        }
    },
})

export const {addnowplayingmovies,addmovietrailer,addpopularmovies,addtopratedmovies,addupcomingmovies} = movieslice.actions

export default movieslice.reducer;
