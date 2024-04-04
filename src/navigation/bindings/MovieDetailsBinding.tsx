import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from '../MainNavigatorParamList';
import MovieDetailsScreen from '../../screens/MovieDetailsScreen';

const MovieDetailsBinding: React.FC<
  NativeStackScreenProps<MainNavigatorParamList, 'moviesDetails'>
> = ({
  route: {
    params: {imbdId},
  },
  navigation,
}) => {
  return <MovieDetailsScreen imbdId={imbdId} onGoBack={navigation.goBack} />;
};

export default MovieDetailsBinding;
