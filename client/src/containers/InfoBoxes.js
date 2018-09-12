import { connect } from 'react-redux';
import InfoBoxes from '../components/Dashboard/DashboardView/InfoBoxes';

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(InfoBoxes);
