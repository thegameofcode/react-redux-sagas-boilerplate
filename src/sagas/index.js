import { fork } from 'redux-saga/effects'
import { watchIncrementIfOdd, watchIncrementAsync } from './counter';

export default function* root() {
  yield [
    fork(watchIncrementIfOdd),
    fork(watchIncrementAsync)
  ]
}
