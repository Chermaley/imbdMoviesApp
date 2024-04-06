import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import MainNavigator from './navigation/MainNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {colors} from './colors';

function App(): React.JSX.Element {
  return (
    <View style={styles.app}>
      <StatusBar backgroundColor={colors.bgColor} />
      <SafeAreaProvider>
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <MainNavigator />
          </SafeAreaView>
        </Provider>
      </SafeAreaProvider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  container: {
    flex: 1,
  },
});
