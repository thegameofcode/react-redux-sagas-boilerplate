import { takeEvery } from 'redux-saga';
import { call, put, select, take } from 'redux-saga/effects';
import fetchWeatherService from '../services/fetchWeather';
import * as actions from '../actions/weather';
import * as actionTypes from '../constants/actions/weather';

function* fetchWeather(action) {
	try {
		const response = yield call(fetchWeatherService, action.cityName);
		yield put(actions.fetchWeatherOK(response));
	}
	catch (error) {
		yield put(actions.fetchWeatherKO(error));
	}
}

export function* watchFetchWeather() {
	yield* takeEvery(actionTypes.FETCH_WEATHER, fetchWeather);
}
