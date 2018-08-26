import { connect } from 'react-redux';
import DashHeaderContent from '../components/Dashboard/SidePane/Header';

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(DashHeaderContent);