import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

export default class DraggableReveal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rightPosition: 0 };

    this.handle = (
      <div>
        <div className="handle" />
      </div>
    );
  }

  drawDraggableImages() {
    return (
      <div className="draggable-photos">
        <div className="draggable-photos__container">
          <img src={this.props.left} alt="" />
        </div>
        <div
          style={{
            width: `calc(50% + ${this.state.rightPosition}px)`,
            backgroundImage: `url(${this.props.right})`,
          }}
          className="draggable-photos__container"
        />
        <Draggable
          handle=".handle"
          ref={(draggable) => {
            this.draggable = draggable;
          }}
          zIndex={100}
          axis="x"
          onDrag={() =>
            this.setState({ rightPosition: this.draggable.state.x })}
        >
          {this.handle}
        </Draggable>
      </div>
    );
  }

  render() {
    let content;
    if (this.props.left !== null && this.props.left !== null) {
      content = this.drawDraggableImages.bind(this)();
    }

    return content || null;
  }
}

DraggableReveal.defaultProps = { left: null, right: null };

DraggableReveal.propTypes = { left: PropTypes.string, right: PropTypes.string };
