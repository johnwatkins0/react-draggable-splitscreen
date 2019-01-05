import * as React from 'react';
import styled from 'styled-components';

interface RightSideProps {
  clipPathStyle: string;
  children: object[];
}

const StyledRightSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;

  > * {
    clip-path: ${({ clipPathStyle }: RightSideProps) => (clipPathStyle ? clipPathStyle : 'none')};
  }
`;

function RightSide({ clipPathStyle, children }: RightSideProps) {
  return <StyledRightSide clipPathStyle={clipPathStyle}>{children}</StyledRightSide>;
}

export default RightSide;
