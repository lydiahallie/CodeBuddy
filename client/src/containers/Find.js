import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Find from '../components/Dashboard/Find/Find';

const mapStateToProps = state =>  {
  return {
    currentUser: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find);