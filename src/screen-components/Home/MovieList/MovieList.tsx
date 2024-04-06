import React from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';
import MovieSkeleton from './MovieSkeleton';
import {MovieListItemType} from '../../../api/models/MovieListItemType';
import Card from '../../../ui/Card';
import styles from './styles';

interface MovieListProps {
  movies: MovieListItemType[];
  loading: boolean;
  onGoToDetails: (imbdId: string) => void;
  onRefresh: () => void;
}

const MovieList = ({
  movies,
  loading,
  onGoToDetails,
  onRefresh,
}: MovieListProps) => {
  const renderItem = ({item}: ListRenderItemInfo<MovieListItemType>) => (
    <Card
      title={item.title}
      image={item.imgPoster}
      onPress={() => onGoToDetails(item.imdbId)}
    />
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
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default MovieList;

const ListEmptyComponent = () => {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Nothing was found</Text>
    </View>
  );
};
