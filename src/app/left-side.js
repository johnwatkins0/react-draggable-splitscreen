import React from 'react';
import Player from '@vimeo/player';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import resizeIframe from './utils/resize-iframe';

export default class LeftSide extends React.Component {
  componentDidMount() {
    if (this.leftVimeo) {
      this.videoDiv = document.createElement('DIV');
      this.leftVimeo.appendChild(this.videoDiv);

      this.player = new Player(this.videoDiv, {
        id: this.props.content.replace('-vimeo', ''),
      });

      this.addPlayerListeners.bind(this)();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.rightPosition === this.props.rightPosition) {
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    if (this.props.rightPosition > (this.props.width || 200) / 2) {
      this.player.getPaused().then((paused) => {
        if (paused === true) {
          this.player.play();
        }
      });
    } else {
      this.player.getPaused().then((paused) => {
        if (paused === false) {
          this.player.pause();
        }
      });
    }
  }

  addPlayerListeners() {
    this.player.on('loaded', this.props.reveal);

    this.player.on('loaded', () => {
      resizeIframe(this.player.element);
    });

    window.addEventListener(
      'resize',
      debounce(() => resizeIframe(this.player.element), 200),
    );
  }

  render() {
    if (this.props.content.indexOf('-vimeo') === -1) {
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

    return (
      <div
        className="draggable-photos__container"
        ref={(div) => {
          this.leftVimeo = div;
        }}
      />
    );
  }
}

LeftSide.propTypes = {
  content: PropTypes.string.isRequired,
  reveal: PropTypes.func.isRequired,
  rightPosition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
