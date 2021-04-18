import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '@/styles/colors';
import TabBar from './type'

export default ({ state, descriptors, navigation }: TabBar) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name) 
        }

        return (
          <TouchableOpacity
            disabled={isFocused}
            key={label}
            onPress={onPress}
            style={styles.item}
          >
            <Text style={{ color: isFocused ? COLORS.PRIMARY : COLORS.PLACEHOLDER }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderTopWidth: 0.9,
    borderTopColor: COLORS.BORDER,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})