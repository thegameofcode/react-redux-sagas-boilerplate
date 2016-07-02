import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import weatherActions from '../actions/weather'
import Weather from '../components/Weather'

function mapStateToProps (state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(weatherActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
