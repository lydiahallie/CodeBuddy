import styled from 'styled-components';

interface P {
  height: string
  none: boolean
  nojustify: boolean
  size: number
  margin: boolean
}

export default (styled.div as any)` 
  height: ${(p: P) => (p.height ? p.height : p.size * 0.45)}px;
  width: ${(p: P) => p.size}px;
  margin: ${(p: P) => (p.margin ? '20px 20px' : '0px 20px')};
  color: white;
  background: linear-gradient(#464646, #3e3e3e);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: ${(p: P) => (p.none ? 'block' : 'flex')}
  flex-direction: column;
  justify-content: ${(p: P) => (p.nojustify ? 'none' : 'center')};
  padding: 20px;
`
