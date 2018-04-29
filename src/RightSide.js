import React from 'react';
import PropTypes from 'prop-types';
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

const RightSide = ({ clipPathStyle, children }) => (
  <StyledRightSide clipPathStyle={clipPathStyle}>
    {children}
  </StyledRightSide>
);

RightSide.propTypes = {
  clipPathStyle: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default RightSide;
