// @ts-ignore
import {API_KEY_OPEN_WEATHER} from 'react-native-dotenv'
import instance from './instance';
const API_KEY = API_KEY_OPEN_WEATHER;

export const getWeatherByLongLat = (long: number, lat: number) => {
  return instance.get(`/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`);
}

export default {
  getWeatherByLongLat
}