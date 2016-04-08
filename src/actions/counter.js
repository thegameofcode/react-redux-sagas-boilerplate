import {INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_ASYNC, INCREMENT_IF_ODD} from '../constants/actions/counter';

export default {
	increment: () => ({type: INCREMENT_COUNTER}),
	decrement: () => ({type: DECREMENT_COUNTER}),
	incrementIfOdd: () => ({type: INCREMENT_IF_ODD}),
	incrementAsync: () => ({type: INCREMENT_ASYNC})
}
