import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@/components'
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';
import {requestLocationPermission} from '@/services/permissions'
import {getWeatherByLongLat} from '@/services/weather';

export default () => {

  const onPress = async () => {
    await requestLocationPermission();
    Geolocation.getCurrentPosition(async (location: GeolocationResponse) => {
      // console.log(location);
      try {
        const result = await getWeatherByLongLat(location.coords.longitude,location.coords.latitude)
        console.log('getWeatherByLongLat', result)
      } catch (error) {
        console.warn('getWeatherByLongLat', error)
      }
    })
  }

  return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text category="header">Glair Narra</Text>
          <Text category="label">https://github.com/glairnarra</Text>
        </View>
        <Button label="Get Location" onPress={onPress}/>
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
