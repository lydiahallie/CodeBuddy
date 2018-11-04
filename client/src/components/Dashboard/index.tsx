/* eslint-disable react/no-unused-state */
import * as React from 'react';
import { Component } from 'react';
import SidePane from './SidePane';
import DashHeader from './SidePane/Header';
import Find from './Find/Find';
import Profile from './Profile/Profile';
import DashboardView from './DashboardView/Dashboard';
import Messages from './Messages/Messages';
import { RouteProps } from 'react-router';

const View = ({ children }: any) => (
  <div className="dashboard-content">{children}</div>
);

interface State {
  currentView: JSX.Element | null
}

interface Props {
  match: any
}

class Dashboard extends Component<Props & RouteProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentView: null,
    };
  }

  // eslint-disable-next-line consistent-return
  blockComponent = (block: string): JSX.Element | undefined => {
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
        return
    }
  };

  changeView = view => {
    this.setState({ currentView: view });
  };

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
