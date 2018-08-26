import styled from 'styled-components';

const InfoBox = styled.div`
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

export default InfoBox;