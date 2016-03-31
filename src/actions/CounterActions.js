import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_ASYNC, INCREMENT_IF_ODD } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return {
    type: INCREMENT_IF_ODD
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC
  };
}
