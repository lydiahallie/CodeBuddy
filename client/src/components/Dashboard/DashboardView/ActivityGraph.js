import React from 'react';
import { Line } from 'react-chartjs';
import InfoBox from '../styled_components/InfoBox';
import { CHART_DATA } from '../../../data/dashboard_data';

export const ActivityGraph = () => (
  <InfoBox size={800}>
    <h3 id="dash-col-title">Activity</h3>
    <div id="line" />
    <Line data={CHART_DATA} width="600" height="250" />
  </InfoBox>
);