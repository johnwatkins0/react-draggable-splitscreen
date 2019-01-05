import * as React from 'react';
import { render } from 'react-dom';

import Image from './image';
import Text from './text';
import Video from './video';

export function start() {
  [...Array.from(document.querySelectorAll('[data-draggable-photos]'))].forEach(container => {
    render(<Image />, container);
  });

  [...Array.from(document.querySelectorAll('[data-draggable-text]'))].forEach(container => {
    render(<Text />, container);
  });

  [...Array.from(document.querySelectorAll('[data-draggable-videos]'))].forEach(container => {
    render(<Video />, container);
  });
}
