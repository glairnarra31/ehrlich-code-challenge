import openweather from "@/apis/openweather"

export const getWeatherByLongLat = (long: number, lat: number) => {
  return openweather.getWeatherByLongLat(long, lat)
}

export default {
  getWeatherByLongLat
}