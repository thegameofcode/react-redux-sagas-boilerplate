import weatherActionTypes from '../constants/actions/weather';

export default {
	fetchWeather: (cityName) => ({type: weatherActionTypes.FETCH_WEATHER, cityName}),
	fetchWeatherOK: (response) => ({type: weatherActionTypes.FETCH_WEATHER_OK, response}),
	fetchWeatherKO: (error) => ({type: weatherActionTypes.FETCH_WEATHER_KO, error})
}
