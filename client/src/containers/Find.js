import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Find from '../components/Dashboard/Find/Find';

const mapStateToProps = state => ({
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages),
});

export default connect(mapStateToProps, mapDispatchToProps)(Find);
