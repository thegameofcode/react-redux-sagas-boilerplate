import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
	render() {
		return (
			<div className="main-app-container">
				<div className="main-app-nav">Home</div>
				<Link to="/weather">to Weather</Link>
			</div>
		);
	}
}
