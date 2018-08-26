import { connect } from 'react-redux';
import { fetchUser, fetchPosts, fetchMessages } from '../actions';
import Dashboard from '../components/Dashboard';

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser),
    fetchPosts: () => dispatch(fetchPosts),
    fetchMessages: () => dispatch(fetchMessages),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);