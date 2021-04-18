import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@/components'

export default () => {
  return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text category="header">Hello, World!</Text>
        </View>
        <Button label="Login" onPress={() => {}}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
