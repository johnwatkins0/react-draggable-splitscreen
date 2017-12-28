import styled from 'styled-components';

const StyledRightSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;

  > * {
    clip-path: ${props => (props.clipPathStyle ? props.clipPathStyle : 'none')};
  }
`;

export default StyledRightSide;
