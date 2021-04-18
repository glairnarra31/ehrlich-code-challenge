import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from '@/navigation';

export default () => (
  <SafeAreaView style={styles.container}>
    <Navigation />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
