import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from '../MainNavigatorParamList.ts';
import HomeScreen from '../../screens/HomeScreen';
import {MovieType} from '../../api/models/Movie.ts';

type Props = NativeStackScreenProps<MainNavigatorParamList, 'home'>;
type HomeProps = {
  navigation: Props['navigation'];
};

const HomeBinding: React.FC<HomeProps> = ({navigation}) => {
  const goToMovieDetails = (movie: MovieType) => {
    navigation.navigate('moviesDetails', {movie});
  };

  return <HomeScreen goToMovieDetails={goToMovieDetails} />;
};

export default HomeBinding;
