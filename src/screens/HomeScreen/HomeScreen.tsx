import React, {useState} from 'react';
import {View} from 'react-native';
import useMovies from '../../hooks/api/useMovies';
import HomeHeader from '../../screen-components/Home/HomeHeader';
import MovieList from '../../screen-components/Home/MovieList';
import styles from './styles';
import ErrorView from '../../components/ErrorView';

type HomeScreenProps = {
  goToMovieDetails: (imbdId: string) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({goToMovieDetails}) => {
  const [search, setSearch] = useState('');
  const {movies, moviesLoading, moviesError, getMoviesHandler} =
    useMovies(search);

  return (
    <View style={styles.wrapper}>
      <HomeHeader search={search} onSearchChange={setSearch} />
      {!moviesError && (
        <MovieList
          movies={movies}
          loading={moviesLoading}
          onGoToDetails={goToMovieDetails}
          onRefresh={getMoviesHandler}
        />
      )}
      {!!moviesError && <ErrorView onRetry={getMoviesHandler} />}
    </View>
  );
};

export default HomeScreen;
