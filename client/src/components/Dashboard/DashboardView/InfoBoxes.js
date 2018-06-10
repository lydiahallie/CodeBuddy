import React from 'react';
import { connect } from 'react-redux';
import shortid from 'short-id';
import styled from 'styled-components';
import { BOX_INFO } from './dashMockData';
import { MessagesIcon } from '../../../assets/icons.js';


export const ProgressBar = ({width}) => (
  <div className='progressbar'>
    <Bar width={width} />
  </div>
);

const InfoBoxes = ({messages}) => (
  <div className='info-boxes'>
    { BOX_INFO.map(box => (
      <InfoBox size={400} key={ shortid.generate() }>
        <div id='box-icon'>{box.icon}</div>
        <Title title>{box.value}</Title>
        <Title>{box.name}</Title>
        <ProgressBar width={70} />
      </InfoBox>
    )) }
    <InfoBox size={400}>
      <div id='box-icon'><MessagesIcon /></div>
      <Title title>{Object.keys(messages).length}</Title>
      <Title>Unread Messages</Title>
      <ProgressBar width={Object.keys(messages).length * 10} />
    </InfoBox>
  </div>
);

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(InfoBoxes);

export const InfoBox = styled.div`
  height: ${props => props.height ? props.height : props.size * 0.45}px;
  width: ${props => props.size}px;
  margin: ${props => props.margin ? '20px 20px' : '0px 20px'};
  color: white;
  background: linear-gradient(#464646, #3e3e3e);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: ${props => props.none ? 'block' : 'flex'}
  flex-direction: column;
  justify-content: ${props => props.nojustify ? 'none' : 'center'};
  padding: 20px;
`;

const Title = styled.span`
  font-family: ${props => props.title ? 'Roboto' : 'Source Sans Pro'};, sans-serif;
  font-size: ${props => props.title ? '25px' : '14px'};
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
`;

const Bar = styled.div`
  animation: grow .8s cubic-bezier(.75,.2,.39,1.02) forwards;
  width: ${props => props.width}px;
  background-color: #00b496;
  box-shadow: #00b496 0px 0px 10px;
  height: 5px;
`;