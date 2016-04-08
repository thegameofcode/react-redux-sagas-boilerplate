import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as weatherActions from '../actions/weather';
import Home from '../components/Home'

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(weatherActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
