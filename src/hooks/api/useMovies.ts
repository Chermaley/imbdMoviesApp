import {useEffect} from 'react';
import {getMovies} from '../../store/moviesSlice';
import {useAppSelector} from '../useAppSelector';
import {useAppDispatch} from '../useAppDispatch';
import {useDebounce} from '../useDebounce';

export default function useMovies(search: string) {
  const dispatch = useAppDispatch();
  const debouncedSearchValue = useDebounce(search, 250) ?? '';

  const movies = useAppSelector(state => state.movies.movieList);
  const moviesLoading = useAppSelector(state => state.movies.movieListLoading);
  const moviesError = useAppSelector(state => state.movies.movieListError);

  useEffect(() => {
    dispatch(getMovies({search: debouncedSearchValue}));
  }, [debouncedSearchValue, dispatch]);

  return {movies, moviesLoading, moviesError};
}
