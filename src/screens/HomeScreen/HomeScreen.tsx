import React, {useState} from 'react';
import {View} from 'react-native';
import MovieList from '../../components/MovieList';
import {MovieType} from '../../api/models/Movie';
import HomeHeader from '../../components/HomeHeader';
import styles from './styles';
import useMovies from '../../hooks/api/useMovies.ts';

type HomeScreenProps = {
  goToMovieDetails: (movie: MovieType) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({goToMovieDetails}) => {
  const [search, setSearch] = useState('');
  const {movies, moviesLoading} = useMovies(search);

  return (
    <View style={styles.wrapper}>
      <HomeHeader search={search} onSearchChange={setSearch} />
      {!moviesLoading && movies && (
        <MovieList movies={movies} onGoToDetails={goToMovieDetails} />
      )}
    </View>
  );
};

export default HomeScreen;
