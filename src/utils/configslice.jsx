import { createSlice } from "@reduxjs/toolkit";

const configslice = createSlice({
  name: "config",
  initialState: {
    lang : "en",
  },
  reducers: {
    changelanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default configslice.reducer;

export const { changelanguage } = configslice.actions;

