import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {MovieType} from '../../api/models/Movie.ts';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import MovieCard from '../../ui/MovieCard';
import styles from './styles';

interface MovieListProps {
  movies: MovieType[];
  onGoToDetails: (movie: MovieType) => void;
}

const MovieList = ({movies, onGoToDetails}: MovieListProps) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<MovieType>) => (
      <MovieCard
        title={item.title}
        image={item.imgPoster}
        onPress={() => onGoToDetails(item)}
      />
    ),
    [onGoToDetails],
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentWrapper}
      keyExtractor={item => item.imdbId}
      numColumns={2}
    />
  );
};

export default MovieList;
