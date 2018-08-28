import { connect } from 'react-redux';
import AllMessages from '../components/Dashboard/Messages/Messages';

const mapStateToProps = state => ({
  currentUser: state.user,
  messages: state.messages,
});

export default connect(mapStateToProps)(AllMessages);
