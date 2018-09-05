import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import UserProfile from '../components/Dashboard/Profile/Profile';

const mapStateToProps = state => ({
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
