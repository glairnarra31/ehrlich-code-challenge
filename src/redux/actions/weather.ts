import {WEATHER} from '@/enums/actions';
import {getWeatherByLongLat} from '@/services/weather';
import {GeolocationResponse} from '@react-native-community/geolocation';
import {Weather} from './type';

type WeatherAction = {
  type: string
  payload: Weather
}
  
type DispatchType = (args: WeatherAction) => WeatherAction

export const setWeather = (geolocation: GeolocationResponse) => async (dispatch: DispatchType) => {
  try {
    const { latitude, longitude } = geolocation.coords
    const data: any = await getWeatherByLongLat(longitude, latitude);
    dispatch({
      type: WEATHER.SET_WEATHER,
      payload: {
        temp: data.main.temp,
        description: data.weather[0].description,
        main: data.weather[0].main,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
    })
  } catch (error) {
    console.log('setGeolocation', error)
  }
};

export default {
  setWeather,
}
