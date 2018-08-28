import { connect } from 'react-redux';
import { fetchUser, fetchPosts, fetchMessages } from '../actions';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => ({
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser),
  fetchPosts: () => dispatch(fetchPosts),
  fetchMessages: () => dispatch(fetchMessages),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
