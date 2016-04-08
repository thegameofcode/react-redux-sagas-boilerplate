import React, {Component} from 'react';
import {Link} from 'react-router';

export default ({onClickHandle, loading}) => (
	<form className="form-inline">
		<div className="form-group">
			<input type="text" className="form-control" ref="cityNameInput" placeholder="Get a five-day forecast in your favorite cities" />
		</div>
		{ loading }
		<button type="submit" className="btn btn-default" onClick={onClickHandle}>Search</button>

	</form>
);


