import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import { Link } from 'react-router'
import styles from './Weather.css'

class Weather extends Component {
    handleSearch() {
        this.props.fetchWeather(this.refs.cityNameInput.value)
    }

    handleKeyPress(event) {
        if (event.key == 'Enter') {
            this.handleSearch()
        }
    }

    render() {
        return (
            <div>
                <div className={ styles.navBar }>
                    <Link to="/">to Home</Link>
                </div>
                <div>
                    <input ref="cityNameInput" placeholder="City" onKeyPress = { this.handleKeyPress.bind(this) } />
                    {
                        this.props.weather.loading ? <span>Searching...</span> : <button onClick={ this.handleSearch.bind(this) }>Search</button>
                    }
                </div>
                {
                    `${this.props.weather.forecasts.length} results`
                }

                {
                    this.props.weather.error ?
                        <div class="alert alert-danger" role="alert">Error when trying to fetch a forecast</div>
                        :
                        null
                }
                {
                    this.props.weather.forecasts.map(forecast => <WeatherCard key={ forecast.id } forecast={ forecast } />)
                }
            </div>
        )
    }
}

export default Weather
