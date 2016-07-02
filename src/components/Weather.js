import React, { Component } from 'react'
import WeatherCard from './WeatherCard'
import { Link } from 'react-router'
import styles from './Weather.css'

class Weather extends Component {
  handleSearch () {
    this.props.fetchWeather(this.refs.cityNameInput.value)
  }

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.handleSearch()
    }
  }

  render () {
    return (
      <div>
        <div className={styles.navBar}>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <div className={styles.searchBox}>
            <input className={styles.inputText} type='text' ref='cityNameInput' placeholder='City' onKeyPress={this.handleKeyPress.bind(this)} />

            <div>
              <button className={styles.btn} onClick={this.handleSearch.bind(this)} disabled={this.props.weather.loading}>
                {this.props.weather.loading ? 'Loading...' : 'Get weather'}
              </button>
            </div>
            {
              this.props.weather.error ? <div>Error trying to fetch a forecast</div> : null
            }
          </div>
        </div>
        {
          this.props.weather.forecasts.map(forecast => <WeatherCard key={forecast.id} forecast={forecast} />)
        }
      </div>
    )
  }
}

export default Weather
