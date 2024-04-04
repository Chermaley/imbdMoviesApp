import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {moviesService} from '../api/moviesService';
import {MovieType} from '../api/models/Movie';

export interface MoviesSlice {
  movies?: MovieType[];
  moviesLoading?: boolean;
}

const initialState: MoviesSlice = {
  movies: [],
  moviesLoading: false,
};

export const getMovies = createAsyncThunk(
  'getMovies',
  ({search}: {search: string}) => {
    try {
      return moviesService.getMovies(search);
    } catch (e) {
      console.log(e);
    }
  },
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMovies.fulfilled, (state, {payload}) => {
        if (payload) {
          state.movies = payload;
          state.moviesLoading = false;
        }
      })
      .addCase(getMovies.pending, state => {
        state.moviesLoading = true;
      })
      .addCase(getMovies.rejected, state => {
        state.moviesLoading = false;
      });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
