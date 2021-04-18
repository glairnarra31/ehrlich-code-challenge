import * as React from 'react';
import {View, StyleSheet } from 'react-native';
import {Text} from '@/components'

const GeoCoordinates: React.FC<{
  longitude: number,
  latitude: number,
}> = ({longitude, latitude}) => (
  <View style={styles.container}>
    <Text category="subtitle">Longitude</Text>
    <Text category="label">{longitude}</Text>
    <Text category="subtitle">Latitude</Text>
    <Text category="label">{latitude}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default GeoCoordinates;
