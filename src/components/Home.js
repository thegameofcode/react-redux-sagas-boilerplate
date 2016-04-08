import React, {Component} from 'react';
import WeatherCard from './weather_card';
import {Link} from 'react-router';

export default class HomePage extends Component {
	handleSearch() {
		this.props.fetchWeather(this.refs.cityNameInput.value);
	}

	render() {
		return (
			<div className="main-app-container">
				<div className="main-app-nav">Home React Redux Saga Boilerplate</div>
				<form className="input-group">
					<input
						ref="cityNameInput"
						placeholder="Get a five-day forecast in your favorite cities"
						className="form-control"
					/>
					<span className="input-group-btn">
						{
							this.props.weather.loading ?
								'searching...'
								:
								<button type="button" className="btn btn-secondary"
								        onClick={this.handleSearch.bind(this)}>Search</button>
						}

					</span>
				</form>

				{
					this.props.weather.error ?
						<div class="alert alert-danger" role="alert">
							Error when trying to fetch a forecast
						</div>
						:
						null
				}

				<div>

					{
						this.props.weather.forecasts.map(forecast => {
							return <WeatherCard key={forecast.city.id} cityName={forecast.city.name} coord={forecast.city.coord} forecast={forecast.list} />
						})
					}
				</div>


				<Link to="/counter">to Counter</Link>
			</div>
		);
	}
}
