import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import * as actions from '../actions/CounterActions';
import { INCREMENT_ASYNC, INCREMENT_IF_ODD } from '../constants/ActionTypes';

const delay = (millis) => new Promise((resolve, reject) => setTimeout(resolve, millis));

export function* incrementAsync(action) {
  yield call(delay, 1000);
  yield put(actions.increment());
}

export function* incrementIfOdd(action) {
  const counter = yield select(state => state.counter)
  if (counter % 2 != 0) {
    yield put(actions.increment());
  }
}

export function* watchIncrementIfOdd() {
  yield* takeEvery(INCREMENT_IF_ODD, incrementIfOdd);
}

export function* watchIncrementAsync() {
  yield* takeLatest(INCREMENT_ASYNC, incrementAsync);
}
