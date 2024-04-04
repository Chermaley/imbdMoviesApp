import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from '../MainNavigatorParamList.ts';
import MovieDetailsScreen from '../../screens/MovieDetailsScreen';

type Props = NativeStackScreenProps<MainNavigatorParamList, 'moviesDetails'>;
type MovieDetailsProps = {
  navigation: Props['navigation'];
};

const MovieDetailsBinding: React.FC<MovieDetailsProps> = ({}) => {
  return <MovieDetailsScreen />;
};

export default MovieDetailsBinding;
