import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';

const MovieSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const renderItem = () => <View style={styles.skeleton} />
  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentWrapper}
      data={data}
      scrollEnabled={false}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default MovieSkeleton;
