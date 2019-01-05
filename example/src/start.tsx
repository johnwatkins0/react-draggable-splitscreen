import * as React from 'react';
import ReactDOM from 'react-dom';

import Image from './Image';
import Text from './Text';
import Video from './Video';

export function start() {
  [...document.querySelectorAll('[data-draggable-photos]')].forEach(container => {
    ReactDOM.render(<Image />, container);
  });

  [...document.querySelectorAll('[data-draggable-text]')].forEach(container => {
    ReactDOM.render(<Text />, container);
  });

  [...document.querySelectorAll('[data-draggable-videos]')].forEach(container => {
    ReactDOM.render(<Video />, container);
  });
}
