import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTab} from '@/components'
import {Hello, Home, Weather} from '@/enums/navigation';

import HelloScreen from './Hello';
import HomeScreen from './Home';
import WeatherScreen from './Weather';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default () => (
  <View style={styles.container}>
    <Tab.Navigator tabBar={BottomTab} >
      <Tab.Screen name={Hello} component={HelloScreen} />
      <Tab.Screen name={Home} component={HomeScreen} />
      <Tab.Screen name={Weather} component={WeatherScreen} />
    </Tab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
