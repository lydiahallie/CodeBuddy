/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

const Title = styled.span`
  font-family: ${props => (props.title ? 'Roboto' : 'Source Sans Pro')};, sans-serif;
  font-size: ${props => (props.title ? '25px' : '14px')};
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
`;

export default Title;
