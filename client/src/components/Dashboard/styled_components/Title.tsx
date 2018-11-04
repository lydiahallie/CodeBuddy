import styled from 'styled-components';

interface P {
  title: boolean
}

export default (styled.span as any)`
  font-family: ${(p: P) => (p.title ? 'Roboto' : 'Source Sans Pro')};, sans-serif;
  font-size: ${(p: P) => (p.title ? '25px' : '14px')};
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
`;
