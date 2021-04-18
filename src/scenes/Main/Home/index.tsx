import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';
import {requestLocationPermission} from '@/services/permissions'
import actions from "@/redux/actions";
import {Button, Text} from '@/components'

const HomeScene: React.FC<{
  setGeolocation: Function,
  setWeather: Function,
}> = ({setGeolocation, setWeather}) => {
  const onPress = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      console.log('No permission granted'); 
      return;
    }

    Geolocation.getCurrentPosition((geolocation: GeolocationResponse) => {
      setGeolocation(geolocation)
      setWeather(geolocation)
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

export default connect(
  null,
  {
    setGeolocation: actions.geolocation.setGeolocation,
    setWeather: actions.weather.setWeather,
  }
)(HomeScene);