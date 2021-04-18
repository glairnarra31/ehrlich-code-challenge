import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MainScreen} from '@/scenes';
import {Main} from '@/enums/navigation';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={Main}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Main} component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
