import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SidePane } from './SidePane';
import { fetchUser, fetchPosts, fetchMessages } from '../../actions';
import { DashHeader } from './SidePane/Header';
import Find from './Find/Find';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import { DashboardView } from './DashboardView/Dashboard';

const View = props => (
  <div className='dashboard-content'>
    { props.children }
  </div>
);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'Find',
    }
  }

  blockComponent = block => {
    switch (block) {
      case 'find':
       return <Find />
      case 'profile':
        return <Profile />
      case 'dashboard':
        return <DashboardView />
      case 'messages':
        return <Messages />
      default:
        return
    }
  }

  changeView = view => {
    this.setState({ currentView: view })
  }

  componentDidMount() {
    const { fetchUser, fetchPosts, fetchMessages, currentUser } = this.props;
    fetchUser();
    fetchPosts();
    fetchMessages(currentUser);
  }

  render() {
    const { name } = this.props.match.params;
    return (
      <div className='app dashboard'>
        <DashHeader />
        <div className='dash-app-content'>
          <SidePane changeView={ this.changeView } />
          <View>
            { this.blockComponent(name) }
          </View>
        </div>
      </div>
    );
  }
}

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