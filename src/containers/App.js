import React, {Component} from 'react';

export default class App extends Component {

	render() {
		console.log('render app ', this.props)
		return (
			<div>
				{ this.props.children }

				{
					(()=> {
						if (process.env.NODE_ENV === 'development') {
							const DevTools = require('./DevTools');
							return <DevTools />;
						}
					})()
				}
			</div>

		);
	}
};
