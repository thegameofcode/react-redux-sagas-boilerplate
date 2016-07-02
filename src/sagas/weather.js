import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import fetchWeatherService from '../services/fetchWeather'
import * as actions from '../actions/weather'
import * as actionTypes from '../constants/actions/weather'

function * fetchWeather (action) {
  try {
    const response = yield call(fetchWeatherService, action.cityName)
    yield put(actions.fetchWeatherSucces(response))
  } catch (error) {
    yield put(actions.fetchWeatherError(error))
  }
}

export function * watchFetchWeather () {
  yield * takeEvery(actionTypes.FETCH_WEATHER, fetchWeather)
}
