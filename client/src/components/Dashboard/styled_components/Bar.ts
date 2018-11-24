import styled from 'styled-components';

const Bar = (styled.div as any)`
  animation: grow 0.8s cubic-bezier(0.75, 0.2, 0.39, 1.02) forwards;
  width: ${props => props.width}px;
  background-color: #00b496;
  box-shadow: #00b496 0px 0px 10px;
  height: 5px;
`;

export default Bar;
