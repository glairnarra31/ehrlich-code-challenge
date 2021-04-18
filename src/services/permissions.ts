import {Permission, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const requestPermissionIOS = () => {
  try {
    Geolocation.requestAuthorization();
  } catch (error) {
    console.log('requestPermissionIOS', error);
  }
}

const requestPermissionAndroid = async (permission: Permission): Promise<boolean> => {
  try {
    const hasPermissionAlready = await PermissionsAndroid.check(permission);
    if (hasPermissionAlready) return true

    const granted = await PermissionsAndroid.request(permission);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) return true
  } catch (error) {
    console.log('requestPermissionAndroid', error);
  }
  return false;
}

export const requestLocationPermission = async () => {
  let isGranted = false;
  if (Platform.OS === 'android') {
    isGranted = await requestPermissionAndroid(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
  } else {
    requestPermissionIOS();
    isGranted = true
  }
  return isGranted;
}

export default {
  requestLocationPermission
}