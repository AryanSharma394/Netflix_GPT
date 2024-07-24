import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesslice from "./moviesslice";
import toggleslice from "./toggleslice";
import configslice from "./configslice";

const appstore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesslice,
    toggle: toggleslice,
    config: configslice,
  },
});

export default appstore;
