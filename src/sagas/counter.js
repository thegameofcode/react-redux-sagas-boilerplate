import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, select, take, cancel, fork } from 'redux-saga/effects';

import * as actions from '../actions/counter';
import { INCREMENT_ASYNC, INCREMENT_IF_ODD } from '../constants/actions/counter';

const delay = (millis) => new Promise((resolve, reject) => setTimeout(resolve, millis));


const api = {
  login: () => {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a')
        .then((res)=>res.json());
  }
}


export function* incrementAsync(action) {
  //yield call(delay, 1000);
  //yield put(actions.increment());
  try {
    const json = yield call(api.login)
    yield put({ type: 'LOGIN_OK', result: json });
  }
  catch(err){
    console.error('////', err);
  }
}

export function* incrementIfOdd(action) {
  const counter = yield select(state => state.counter)
  if (counter % 2 != 0) {
    yield put(actions.increment());
  }
}

export function* watchIncrementIfOdd() {

  while(true) {
    const action = yield take(INCREMENT_IF_ODD);
    yield* incrementIfOdd(action);
  }

  //yield* takeEvery(INCREMENT_IF_ODD, incrementIfOdd);
}

export function* watchIncrementAsync() {
  let task;
  while(true) {
    const action = yield take(INCREMENT_ASYNC);
    if(task){
      yield cancel(task);
    }
    task = yield fork(incrementAsync,action);
  }

  //yield* takeLatest(INCREMENT_ASYNC, incrementAsync);
}
