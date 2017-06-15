import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import LeftSide from './left-side';
import RightSide from './right-side';

class DraggablePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rightPosition: 0, width: 0, opacity: 0 };

    this.handle = (
      <div>
        <div
          className={`handle${this.props['start-at'] ? ` handle--${this.props['start-at']}` : ''}`}
        />
      </div>
    );

    this.handleDrag = this.handleDrag.bind(this);
    this.reveal = this.reveal.bind(this);
    this.width = 0;
  }

  componentDidMount() {
    this.width = this.container.clientWidth;
  }

  handleDrag() {
    if (this.draggable) {
      this.setState({ rightPosition: this.draggable.state.x });
    }
  }

  reveal() {
    this.setState({ opacity: 1 });
  }

  render() {
    return (
      <div
        style={{ opacity: this.state.opacity, transition: 'opacity .4s' }}
        ref={(div) => {
          this.container = div;
        }}
        className={`draggable-photos draggable-photos--${this.props['start-at']}`}
      >
        <LeftSide
          content={this.props.left}
          rightPosition={this.state.rightPosition}
          startAt={this.props['start-at']}
          width={this.width}
          reveal={this.reveal}
        />
        <RightSide
          content={this.props.right}
          rightPosition={this.state.rightPosition}
          startAt={this.props['start-at']}
          width={this.width}
        />
        <Draggable
          bounds={{ left: 0, right: this.width }}
          handle=".handle"
          ref={(draggable) => {
            this.draggable = draggable;
          }}
          zIndex={100}
          axis="x"
          onDrag={this.handleDrag}
        >
          {this.handle}
        </Draggable>
      </div>
    );
  }
}

DraggablePhotos.defaultProps = {
  'start-at': 'center',
};

DraggablePhotos.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  'start-at': PropTypes.string,
};

export default DraggablePhotos;
