import * as actionsTypes from '../constants/actions/weather';

export default {
	fetchWeather: (cityName) => ({type: actionsTypes.FETCH_WEATHER, cityName}),
	fetchWeatherOK: (forecast) => ({type: actionsTypes.FETCH_WEATHER_OK, forecast}),
	fetchWeatherKO: (error) => ({type: actionsTypes.FETCH_WEATHER_KO, error})
}
