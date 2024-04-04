import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {moviesService} from '../api/moviesService';
import {MovieType} from '../api/models/Movie';

export interface MoviesSlice {
  movies: MovieType[];
  moviesLoading: boolean;
  error?: string;
}

const initialState: MoviesSlice = {
  movies: [],
  moviesLoading: false,
  error: '',
};

export const getMovies = createAsyncThunk(
  'getMovies',
  ({search}: {search: string}, {rejectWithValue}) => {
    try {
      return moviesService.getMovies(search);
    } catch (e) {
      rejectWithValue(e);
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
          state.error = '';
        }
      })
      .addCase(getMovies.pending, state => {
        state.moviesLoading = true;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.moviesLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
