import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import {RootState} from '@/redux/store';
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';
import {requestLocationPermission} from '@/services/permissions'
import actions from "@/redux/actions";
import {Button, GeoCoordinates, UserProfile} from '@/components'

const HomeScene: React.FC<{
  setGeolocation: Function,
  setWeather: Function,
  profileUrl: string,
  name: string,
  longitude: number,
  latitude: number,
}> = ({setGeolocation, setWeather, name, profileUrl, longitude, latitude}) => {
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
        <UserProfile name={name} profileUrl={profileUrl} />
        {(longitude && latitude) ? (
          <GeoCoordinates longitude={longitude} latitude={latitude} />
        ) : null }
        <Button label="Get Location" onPress={onPress}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = ({user, geolocation}: RootState) => {
  const {profileUrl, name} = user;
  const {longitude, latitude} = geolocation
  return {
    profileUrl, name, longitude, latitude
  };
}

export default connect(
  mapStateToProps,
  {
    setGeolocation: actions.geolocation.setGeolocation,
    setWeather: actions.weather.setWeather,
  }
)(HomeScene);