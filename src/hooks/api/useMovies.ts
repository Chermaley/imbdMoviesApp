import {useEffect, useRef} from 'react';
import {getMovies} from '../../store/moviesSlice.ts';
import {useAppSelector} from '../useAppSelector.ts';
import {useAppDispatch} from '../useAppDispatch.ts';
import {useDebounce} from "../useDebounce.ts";

export default function useMovies(search: string) {
  const dispatch = useAppDispatch();
  const debouncedSearchValue  = useDebounce(search, 250) ?? ''

  const movies = useAppSelector(state => state.movies.movies);
  const moviesLoading = useAppSelector(state => state.movies.moviesLoading);
  const moviesError = useAppSelector(state => state.movies.error);

  useEffect(() => {
    dispatch(getMovies({search: debouncedSearchValue}));
  }, [debouncedSearchValue, dispatch]);

  return {movies, moviesLoading, moviesError};
}
