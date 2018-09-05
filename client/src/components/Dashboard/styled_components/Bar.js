import styled from 'styled-components';

const Bar = styled.div`
  animation: grow .8s cubic-bezier(.75,.2,.39,1.02) forwards;
  width: ${props => props.width}px;
  background-color: #00b496;
  box-shadow: #00b496 0px 0px 10px;
  height: 5px;
`;

export default Bar;
