import React from 'react';
import PropTypes from 'prop-types';

export default class RightSide extends React.Component {
  setWidth() {
    switch (this.props.startAt) {
      case 'center':
        return `calc(50% + ${this.props.rightPosition}px)`;
      case 'left':
        return `calc(100% - ${this.props.rightPosition}px)`;
      default:
        return '0';
    }
  }

  render() {
    const width = this.setWidth();

    return (
      <div
        style={{ width, backgroundImage: `url(${this.props.content})` }}
        className="draggable-photos__container"
        ref={(div) => {
          this.right = div;
        }}
      />
    );
  }
}

RightSide.propTypes = {
  content: PropTypes.string.isRequired,
  rightPosition: PropTypes.number.isRequired,
  startAt: PropTypes.string.isRequired,
};
