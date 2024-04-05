import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import MovieSkeleton from './MovieSkeleton';
import {MovieListItemType} from "../../../api/models/MovieListItemType";
import MovieCard from "../../../ui/MovieCard";
import styles from './styles';

interface MovieListProps {
  movies: MovieListItemType[];
  loading: boolean;
  onGoToDetails: (imbdId: string) => void;
}

const MovieList = ({movies, loading, onGoToDetails}: MovieListProps) => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<MovieListItemType>) => (
      <MovieCard
        title={item.title}
        image={item.imgPoster}
        onPress={() => onGoToDetails(item.imdbId)}
      />
    ),
    [onGoToDetails],
  );

  if (loading) {
    return <MovieSkeleton />;
  }

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
