import * as actionTypes from '../constants/actions/weather';

const initialState = {
	forecasts: [],
	loading: false,
	error: null
};

function fetchWeather(state) {
	return {
		...state,
		forecasts: [],
		error: null,
		loading: true
	};
}

function fetchWeatherOK(state, action) {
	let result

	if (action.response.data.cod == 404) {
		result = []
	} else {
		result = action.response.data.list
	}

	return {
		...state,
		error: null,
		loading: false,
		forecasts: [...state.forecasts, ...result]
	}
}

function fetchWeatherKO(state, { error }) {
	return {
		...state,
		error,
		loading: false
	};
}

export default function counter(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_WEATHER:
			return fetchWeather(state, action);
		case actionTypes.FETCH_WEATHER_OK:
			return fetchWeatherOK(state, action);
		case actionTypes.FETCH_WEATHER_KO:
			return fetchWeatherKO(state, action);
		default:
			return state;
	}
}
