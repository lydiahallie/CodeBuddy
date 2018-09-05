import { connect } from 'react-redux';
import DashHeaderContent from '../components/Dashboard/SidePane/Header';

const mapStateToProps = state => ({
  currentUser: state.user,
});

export default connect(mapStateToProps)(DashHeaderContent);
