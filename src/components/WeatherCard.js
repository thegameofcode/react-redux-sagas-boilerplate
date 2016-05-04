import React, {Component} from 'react'
import weatherIcon from '../utils/icons'
import styles from './WeatherCard.css'

export default ({ forecast }) => (
	<div className={ styles.root }>
		<div className={ styles.icon }>{ weatherIcon(forecast.weather[0].icon) }</div>
		<h3>{ `${forecast.weather[0].main} ${forecast.main.temp}ºC` }</h3>
		<h1>{ forecast.name }, { forecast.sys.country }</h1>
	</div>
);
