import React from 'react';
import shortid from 'short-id';
import PropTypes from 'prop-types';
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

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
};

const InfoBoxes = ({ messages }) => (
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
      <div id="box-icon"><MessagesIcon /></div>
      <Title title>{Object.keys(messages).length}</Title>
      <Title>Unread Messages</Title>
      <ProgressBar width={Object.keys(messages).length * 10} />
    </InfoBox>
  </div>
);

InfoBoxes.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      body: PropTypes.string.isRequired,
      __v: PropTypes.number,
    }),
  ).isRequired,
};

export default InfoBoxes;
