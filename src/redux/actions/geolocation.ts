import {GEOLOCATION} from '@/enums/actions';
import { GeolocationResponse } from '@react-native-community/geolocation';

export const setGeolocation = (geolocation: GeolocationResponse) => ({
  type: GEOLOCATION.SET_GEOLOCATION,
  payload: {
    longitude: geolocation.coords.longitude,
    latitude: geolocation.coords.latitude,
  }
});

export default {
  setGeolocation,
}
