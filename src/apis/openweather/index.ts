import {OPEN_WEATHER_API_KEY} from 'react-native-dotenv'
import instance from './instance';
const API_KEY = OPEN_WEATHER_API_KEY;

export const getWeatherByLongLat = (long: number, lat: number) => {
  return instance.get(`/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`);
}

export default {
  getWeatherByLongLat
}