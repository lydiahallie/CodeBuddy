import React, { Component } from 'react';
import { SidePane } from './SidePane';
import DashHeader from '../../containers/DashHeader';
import Find from '../../containers/Find';
import Profile from '../../containers/Profile';
import { DashboardView } from './DashboardView/Dashboard';
import Messages from '../../containers/Messages';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const View = ({ children }) => {
  console.log('children', children);
  return (
    <div className="dashboard-content">
      {children}
    </div>
  );
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      currentView: null,
    };
  }

  blockComponent = (block) => {
    switch (block) {
      case 'find':
        return <Find />;
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <DashboardView />;
      case 'messages':
        return <Messages />;
      default:
    }
  }

  changeView = (view) => {
    this.setState({ currentView: view });
  }


  componentDidMount() {
    const {
      fetchUser, fetchPosts, fetchMessages, currentUser,
    } = this.props;
    fetchUser();
    fetchPosts();
    fetchMessages(currentUser);
  }

  render() {
    const { name } = this.props.match.params;
    return (
      <div className="app dashboard">
        <DashHeader />
        <div className="dash-app-content">
          <SidePane />
          <View>{this.blockComponent(name)}</View>
        </div>
      </div>
    );
  }
}

export default Dashboard;
