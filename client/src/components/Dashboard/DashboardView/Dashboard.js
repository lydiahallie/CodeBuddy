import React from 'react';
import { ActivityGraph } from './ActivityGraph';
import MessagesTable from '../../../containers/MessageTable';
import InfoBoxes from '../../../containers/InfoBoxes';
import DashProfile from '../../../containers/DashProfile';

const StatsBoxes = () => (
  <div className="stats-boxes">
    <ActivityGraph />
    <div>
      <MessagesTable />
      <DashProfile />
    </div>
  </div>
);

export const DashboardView = () => (
  <div className="dashboard-view">
    <InfoBoxes />
    <StatsBoxes />
  </div>
);
