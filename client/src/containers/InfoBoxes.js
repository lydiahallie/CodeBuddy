import { connect } from 'react-redux';
import InfoBoxes from '../components/Dashboard/DashboardView/InfoBoxes';


const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(InfoBoxes);