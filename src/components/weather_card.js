import React, {Component} from 'react';
import {Link} from 'react-router';

export default ({cityName, coord, forecast}) => (
	<div className="row">
		<div className="col-sm-6 col-md-4">
			<div className="thumbnail">
				<img src="..." alt="..."/>
				<div className="caption">
					<h3>{cityName}</h3>
					<p>coord: { `${coord.lat}, ${coord.lon}` }</p>
					<p>forecast: { forecast[0].main.temp } </p>
				</div>
			</div>
		</div>
	</div>
);


