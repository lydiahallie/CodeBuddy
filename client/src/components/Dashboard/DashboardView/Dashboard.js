import React from 'react';
import { ActivityGraph } from './ActivityGraph';
import MessagesTable from './MessageTable';
import InfoBoxes from './InfoBoxes';
import { DashProfile } from './DashProfile';

const StatsBoxes = () => (
  <div className='stats-boxes'>
    <ActivityGraph />
    <div>
       <MessagesTable />
       <DashProfile />
    </div>
  </div>
);

export const DashboardView = () => (
  <div className='dashboard-view'>
    <InfoBoxes />
    <StatsBoxes />
  </div>
);