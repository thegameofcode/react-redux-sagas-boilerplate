import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Home.css'

export default class Home extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Home</div>
        <Link to='/weather'>to Weather</Link>
      </div>
    )
  }
}
