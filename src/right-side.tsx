import * as React from 'react';
import styled from 'styled-components';

interface RightSideProps {
  clipPathStyle: React.CSSProperties;
  children: object[];
}

const StyledRightSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;

  img {
    object-fit: cover;
  }
`;

function RightSide({ clipPathStyle, children }: RightSideProps) {
  return <StyledRightSide style={clipPathStyle}>{children}</StyledRightSide>;
}

export default RightSide;
