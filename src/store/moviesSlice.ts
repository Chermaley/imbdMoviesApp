import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {moviesService} from '../api/moviesService';
import {MovieListItemType} from '../api/models/MovieListItemType.ts';
import {MovieType} from '../api/models/MovieType.ts';

export interface MoviesSlice {
  movieList: MovieListItemType[];
  movieListLoading: boolean;
  movieListError?: string;
  movie: MovieType | null;
  movieLoading: boolean;
  movieError?: string;
}

const initialState: MoviesSlice = {
  movieList: [],
  movieListLoading: false,
  movieListError: '',
  movie: null,
  movieLoading: false,
  movieError: '',
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

export const getMovie = createAsyncThunk(
  'getMovie',
  ({id}: {id: string}, {rejectWithValue}) => {
    try {
      return moviesService.getMovieById(id);
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
          state.movieList = payload;
          state.movieListLoading = false;
          state.movieListError = '';
        }
      })
      .addCase(getMovies.pending, state => {
        state.movieListLoading = true;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.movieListLoading = false;
        state.movieListError = action.error.message;
      })
      .addCase(getMovie.fulfilled, (state, {payload}) => {
        if (payload) {
          state.movie = payload;
          state.movieLoading = false;
          state.movieError = '';
        }
      })
      .addCase(getMovie.pending, state => {
        state.movie = null;
        state.movieLoading = true;
        state.movieError = '';
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.movieLoading = false;
        state.movieError = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
