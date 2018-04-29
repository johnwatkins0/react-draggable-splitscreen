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
      leftSide: PropTypes.objectOf(PropTypes.any).isRequired,
      rightSide: PropTypes.objectOf(PropTypes.any).isRequired,
    };
  }

  /**
   * Component setup.
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = { rightPosition: 0 };

    this.onDrag = this.onDrag.bind(this);
    this.bindRef = this.bindRef.bind(this);
  }

  onDrag() {
    this.setState({ rightPosition: this.draggable.state.x });
  }

  get clipPath() {
    return `inset(0 0 0 calc(50% + ${
      this.state.rightPosition
    }px))`;
  }

  bindRef(element) {
    this.draggable = element;
  }

  /**
   * JSX output.
   * @return {ReactElement}
   */
  render = () => (
    <StyledContainer>
      <StyledLeftSide>
        {this.props.leftSide}
      </StyledLeftSide>
      <StyledRightSide clipPathStyle={this.clipPath}>
        {this.props.rightSide}
      </StyledRightSide>
      <Draggable
        ref={this.bindRef}
        zIndex={100}
        bounds="parent"
        axis="x"
        onDrag={this.onDrag}
      >
        <StyledHandle />
      </Draggable>
    </StyledContainer>
  )
}
