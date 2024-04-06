import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import MovieHeader from '../../screenComponents/MovieDetails/MovieDetailsHeader';
import useMovie from '../../hooks/api/useMovie';
import styles from './styles';
import MovieDetailsContent from '../../screenComponents/MovieDetails/MovieDetailsContent';
import ErrorView from '../../components/ErrorView';

interface MovieDetailsScreenProps {
  imbdId: string;
  onGoBack: () => void;
}

export default function MovieDetailsScreen({
  imbdId,
  onGoBack,
}: MovieDetailsScreenProps) {
  const {movie, movieLoading, movieError, getMovieHandler} = useMovie(imbdId);
  return (
    <ScrollView
      style={styles.wrapper}
      refreshControl={
        <RefreshControl refreshing={movieLoading} onRefresh={getMovieHandler} />
      }>
      <MovieHeader
        title={movie?.title}
        poster={movie?.posterImage}
        movieLoading={movieLoading}
        movieError={!!movieError}
        onGoBack={onGoBack}
      />
      {movieError && (
        <View style={styles.errorViewWrapper}>
          <ErrorView onRetry={getMovieHandler} />
        </View>
      )}
      {movie && (
        <MovieDetailsContent
          actors={movie.actors}
          keywords={movie.keywords}
          description={movie.description}
          review={movie.review}
        />
      )}
    </ScrollView>
  );
}
