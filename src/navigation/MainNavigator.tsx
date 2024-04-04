import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, MOVIES_DETAIL} from './routes.ts';
import {colors} from '../colors';
import {HomeBinding, MovieDetailsBinding} from './bindings';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.bgColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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
          options={{title: 'Movie details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
