import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from '../MainNavigatorParamList';
import HomeScreen from '../../screens/HomeScreen';

const HomeBinding: React.FC<
  NativeStackScreenProps<MainNavigatorParamList, 'home'>
> = ({navigation}) => {
  const goToMovieDetails = (imbdId: string) => {
    navigation.navigate('moviesDetails', {imbdId});
  };

  return <HomeScreen goToMovieDetails={goToMovieDetails} />;
};

export default HomeBinding;
