import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from '../actions/counter';
import Counter from '../components/Counter';

function mapStateToProps(state) {
	return {
		counter: state.counter,
		auth: state.auth
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(counterActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
