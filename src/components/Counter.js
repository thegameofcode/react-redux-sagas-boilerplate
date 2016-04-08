import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default ({counter, actions, auth}) => (
	<div className="counter-container">
		<Link to="/">Home</Link>
		{ JSON.stringify(auth.result) }
		<div className="counter-num-label">{counter}</div>
		<div className="counter-even-label">{counter % 2 === 0 ? 'even' : 'odd'}</div>
		<br />
		<div className="counter-buttons">
			<button onClick={ actions.decrement }>-</button>
			<button onClick={ actions.increment }>+</button>
			<button onClick={ actions.incrementAsync }>+ async</button>
			<button onClick={ actions.incrementIfOdd }>+ if odd</button>
		</div>
	</div>
);
