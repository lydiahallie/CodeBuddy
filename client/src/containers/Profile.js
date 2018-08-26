import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import UserProfile from '../components/Dashboard/Profile/Profile'; 

const mapStateToProps = state => {
  return {
    currentUser: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);