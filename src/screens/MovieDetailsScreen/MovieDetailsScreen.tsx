import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import MovieHeader from '../../screenComponents/MovieDetails/MovieDetailsHeader';
import useMovie from '../../hooks/api/useMovie';
import styles from './styles';
import MovieDetailsContent from '../../screenComponents/MovieDetails/MovieDetailsContent';

interface MovieDetailsScreenProps {
  imbdId: string;
  onGoBack: () => void;
}

export default function MovieDetailsScreen({
  imbdId,
  onGoBack,
}: MovieDetailsScreenProps) {
  const {movie, movieLoading, getMovieHandler} = useMovie(imbdId);
  return (
    <ScrollView
      style={styles.wrapper}
      refreshControl={
        <RefreshControl refreshing={movieLoading} onRefresh={getMovieHandler} />
      }>
      {movie && (
        <>
          <MovieHeader
            title={movie.title}
            poster={movie.posterImage}
            onGoBack={onGoBack}
          />
          <MovieDetailsContent
            actors={movie.actors}
            keywords={movie.keywords}
            description={movie.description}
          />
        </>
      )}
    </ScrollView>
  );
}
