import weatherActionTypes from '../constants/actions/weather'

export default {
  fetchWeather: (cityName) => ({ type: weatherActionTypes.FETCH_WEATHER, cityName }),
  fetchWeatherSucces: (response) => ({ type: weatherActionTypes.FETCH_WEATHER_SUCCESS, response }),
  fetchWeatherError: (error) => ({ type: weatherActionTypes.FETCH_WEATHER_ERROR, error })
}
