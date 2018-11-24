import * as React from 'react';
import shortid from 'short-id';
import { Query } from 'react-apollo';
import { getMessages } from './query';
import InfoBox from '../styled_components/InfoBox';
import Title from '../styled_components/Title';
import Bar from '../styled_components/Bar';
import { BOX_INFO } from '../../../data/dashboard_data';
import { MessagesIcon } from '../../../assets/icons';

interface ProgessBarProps {
  width: number
}

export const ProgressBar = ({ width }: ProgessBarProps) => (
  <div className="progressbar">
    <Bar width={width} />
  </div>
);

export default () => (
  <Query query={getMessages} variables={{ id: localStorage.getItem('current_user') }}>
  {({data}) => (
    data && data.messages ? (
      <div className="info-boxes">
        {BOX_INFO.map(box => (
          <InfoBox size={400} key={shortid.generate()}>
            <div id="box-icon">{box.icon}</div>
            <Title title>{box.value}</Title>
            <Title>{box.name}</Title>
            <ProgressBar width={70} />
          </InfoBox>
        ))}
        <InfoBox size={400}>
          <div id="box-icon">
            <MessagesIcon />
          </div>
          <Title title>{data.messages.length}</Title>
          <Title>Unread Messages</Title>
          <ProgressBar width={data.messages.length * 10} />
        </InfoBox>
      </div> 
    ) : <div className="info-boxes" />
  )}
  </Query>
);
