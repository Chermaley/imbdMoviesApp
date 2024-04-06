import {useCallback, useEffect} from 'react';
import {getMovie} from '../../store/moviesSlice.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

export default function useMovie(id: string) {
  const dispatch = useAppDispatch();

  const movie = useAppSelector(state => state.movies.movie);
  const movieLoading = useAppSelector(state => state.movies.movieLoading);
  const movieError = useAppSelector(state => state.movies.movieError);

  const getMovieHandler = useCallback(() => {
    dispatch(getMovie({id}));
  }, [id, dispatch]);

  useEffect(() => {
    getMovieHandler();
  }, [getMovieHandler]);

  return {movie, movieLoading, movieError, getMovieHandler};
}
