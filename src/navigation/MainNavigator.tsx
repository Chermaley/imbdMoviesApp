import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, MOVIES_DETAIL} from './routes';
import {HomeBinding, MovieDetailsBinding} from './bindings';
import {MainNavigatorParamList} from './MainNavigatorParamList';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          presentation: 'card',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name={HOME}
          component={HomeBinding}
          options={{title: 'Home', headerShown: false}}
        />
        <Stack.Screen
          name={MOVIES_DETAIL}
          component={MovieDetailsBinding}
          options={{title: 'Movie details', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
