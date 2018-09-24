import React from 'react';
import shortid from 'short-id';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { getMessages } from './query';
import InfoBox from '../styled_components/InfoBox';
import Title from '../styled_components/Title';
import Bar from '../styled_components/Bar';
import { BOX_INFO } from '../../../data/dashboard_data';
import { MessagesIcon } from '../../../assets/icons';

export const ProgressBar = ({ width }) => (
  <div className="progressbar">
    <Bar width={width} />
  </div>
);

const InfoBoxes = () => (
  <Query query={getMessages}>
  {({data}) => (
    data.messages ? <div className="info-boxes">
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
    </div> : <div className="info-boxes" />
  )}
  </Query>
);

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
};

export default InfoBoxes;
