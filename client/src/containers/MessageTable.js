import { connect } from 'react-redux';
import MessagesTable from '../components/Dashboard/DashboardView/MessageTable';


const mapStateToProps = state => ({
  user: state.user,
  posts: state.posts,
});

export default connect(mapStateToProps)(MessagesTable);
