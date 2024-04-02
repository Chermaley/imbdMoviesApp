import {createSlice} from '@reduxjs/toolkit';

export interface MoviesSlice {}

const initialState: MoviesSlice = {};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
