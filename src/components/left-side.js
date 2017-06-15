import React from 'react';
import PropTypes from 'prop-types';

class LeftSide extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.rightPosition === this.props.rightPosition) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div
        ref={(div) => {
          this.left = div;
        }}
        className="draggable-photos__container"
      >
        <img src={this.props.content} alt="" onLoad={this.props.reveal} />
      </div>
    );
  }
}

LeftSide.propTypes = {
  content: PropTypes.string.isRequired,
  reveal: PropTypes.func.isRequired,
  rightPosition: PropTypes.number.isRequired,
};

export default LeftSide;
