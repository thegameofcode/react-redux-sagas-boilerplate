import React from 'react'
import styles from './WeatherCard.css'

export default ({forecast}) => (
  <div className={styles.wrapper}>
    <img src={`images/weather/${forecast.weather[0].icon}.svg`} />

    <h3>{`${forecast.weather[ 0 ].main} ${forecast.main.temp}`} ºC</h3>

    <h1>{forecast.name}, {forecast.sys.country}</h1>
  </div>
)
