import React from 'react';
import Player from '@vimeo/player';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import resizeIframe from './utils/resize-iframe';

export default class RightSide extends React.Component {
  componentDidMount() {
    if (this.rightVimeo) {
      this.videoDiv = document.createElement('DIV');
      this.rightVimeo.appendChild(this.videoDiv);

      this.player = new Player(this.videoDiv, {
        id: this.props.content.replace('-vimeo', ''),
      });

      this.addPlayerListeners.bind(this)();
    }
  }

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

  addPlayerListeners() {
    this.player.on('loaded', () => {
      this.player.element.style.opacity = 1;
    });
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

    return (
      <div
        style={{ width: `calc(50% + ${this.props.rightPosition}px)` }}
        className="draggable-photos__container"
        ref={(div) => {
          this.rightVimeo = div;
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
