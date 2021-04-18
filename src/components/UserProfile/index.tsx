import * as React from 'react';
import {View, StyleSheet } from 'react-native';
import {Text} from '@/components'

const componentName: React.FC<{
  name: string,
  profileUrl: string,
}> = ({name, profileUrl}) => (
  <View style={styles.container}>
    <Text category="header">{name}</Text>
    <Text category="label">{profileUrl}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default componentName;
