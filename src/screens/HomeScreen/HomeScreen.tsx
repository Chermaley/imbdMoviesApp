import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MovieList from '../../components/MovieList';
import {MovieType} from '../../api/models/Movie';
import HomeHeader from '../../components/HomeHeader';
import useMovies from '../../hooks/api/useMovies';
import styles from './styles';

type HomeScreenProps = {
  goToMovieDetails: (movie: MovieType) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({goToMovieDetails}) => {
  const [search, setSearch] = useState('');
  const {movies, moviesLoading, moviesError} = useMovies(search);
  return (
    <View style={styles.wrapper}>
      <HomeHeader search={search} onSearchChange={setSearch} />
      {moviesError && (
        <View style={styles.center}>
          <Text style={styles.errorText}>{moviesError}</Text>
        </View>
      )}
      <MovieList
        movies={movies}
        loading={moviesLoading}
        onGoToDetails={goToMovieDetails}
      />
    </View>
  );
};

export default HomeScreen;
