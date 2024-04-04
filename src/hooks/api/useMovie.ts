import {useAppSelector} from '../useAppSelector';
import {useCallback, useEffect} from 'react';
import {getMovie} from '../../store/moviesSlice.ts';
import {useAppDispatch} from '../useAppDispatch.ts';

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
  }, []);

  return {movie, movieLoading, movieError, getMovieHandler};
}
