import { CHART_DATA } from '../../../data/dashboard_data';
import { Line } from 'react-chartjs';
import * as React from 'react';
import styled from 'styled-components';

export default () => (
  <InfoBox size={800}>
    <h3 id="dash-col-title">Activity</h3>
    <div id="line" />
    <Line data={CHART_DATA} width="600" height="250" />
  </InfoBox>
) as any

const InfoBox = (styled.div as any)`
  display: ${props => (props.none ? 'block' : 'flex')};
  justify-content: ${props => (props.nojustify ? 'none' : 'center')};
  flex-direction: column;

  height: ${props  => (props.height ? props.height : props.size * 0.45)}px;
  width: ${props => props.size}px;
  margin: ${props => (props.margin ? '20px 20px' : '0px 20px')};
  padding: 20px;

  color: white;
  background: linear-gradient(#464646, #3e3e3e);
  border: 1px solid rgba(255, 255, 255, 0.1);  
`;
