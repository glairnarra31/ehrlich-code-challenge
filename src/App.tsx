import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from '@/navigation';
import {Provider} from 'react-redux'
import store from './redux/store'

export default () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
