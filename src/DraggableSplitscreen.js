import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import StyledContainer from './StyledContainer';
import StyledLeftSide from './StyledLeftSide';
import StyledRightSide from './StyledRightSide';
import StyledHandle from './StyledHandle';

/**
 * The main component.
 */
export default class DraggableSplitscreen extends React.Component {
  /**
   * Returns the prop types for this component.
   * @return {Object}
   */
  static get propTypes() {
    return {
      leftSide: PropTypes.func.isRequired,
      rightSide: PropTypes.func.isRequired,
    };
  }

  /**
   * Component setup.
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = { rightPosition: 0 };
  }

  /**
   * JSX output.
   * @return {ReactElement}
   */
  render() {
    const LeftSide = this.props.leftSide;
    const RightSide = this.props.rightSide;
    const clipPathStyle = `inset(0 0 0 calc(50% + ${
      this.state.rightPosition
    }px))`;

    return (
      <StyledContainer className="DraggableSplitscreen">
        <StyledLeftSide className="DraggableSplitscreen__left-side">
          <LeftSide />
        </StyledLeftSide>
        <StyledRightSide
          style={{
            clipPath: clipPathStyle,
          }}
          clipPathStyle={clipPathStyle}
          className="DraggableSplitscreen__right-side"
        >
          <RightSide />
        </StyledRightSide>
        <Draggable
          handle=".DraggableSplitscreen__handle"
          ref={draggable => {
            this.draggable = draggable;
          }}
          zIndex={100}
          bounds="parent"
          axis="x"
          onDrag={() => {
            this.setState({ rightPosition: this.draggable.state.x });
          }}
        >
          <StyledHandle className="DraggableSplitscreen__handle" />
        </Draggable>
      </StyledContainer>
    );
  }
}
