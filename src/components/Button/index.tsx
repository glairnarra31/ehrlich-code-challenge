import * as React from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import COLORS from '@/styles/colors';
import Text from '../Text';

type props = {
  label: string
  disabled?: boolean,
  onPress?: (event: GestureResponderEvent) => void,
}

export default ({label, disabled=false, onPress}: props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={styles.container}
    >
      <Text category="header" style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 6,
  },
  text: {
    color: COLORS.LIGHT,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  }
});
