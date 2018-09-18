/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidePane from './SidePane';
import DashHeader from './SidePane/Header';
import Find from './Find/Find';
import Profile from './Profile/Profile';
import DashboardView from './DashboardView/Dashboard';
import Messages from './Messages/Messages';

const View = ({ children }) => (
  // console.log('children', children);
  <div className="dashboard-content">{children}</div>
);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      currentView: null,
    };
  }

  // eslint-disable-next-line consistent-return
  blockComponent = block => {
    switch (block) {
      case 'find':
        return <Find />;
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <DashboardView />;
      case 'messages':
        return <Messages />;

      // no default
    }
  };

  changeView = view => {
    this.setState({ currentView: view });
  };

  render() {


    // eslint-disable-next-line react/destructuring-assignment
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

Dashboard.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

View.propTypes = {
  children: PropTypes.node,
};

View.defaultProps = {
  children: undefined,
};

export default Dashboard;
