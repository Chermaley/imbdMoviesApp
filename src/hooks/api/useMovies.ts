import {useEffect} from 'react';
import {getMovies} from '../../store/moviesSlice.ts';
import {useAppSelector} from '../useAppSelector.ts';
import {useAppDispatch} from '../useAppDispatch.ts';

export default function useMovies(search: string) {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.movies);
  const moviesLoading = useAppSelector(state => state.movies.moviesLoading);

  useEffect(() => {
    dispatch(getMovies({search}));
  }, [search, dispatch]);

  return {movies, moviesLoading};
}
