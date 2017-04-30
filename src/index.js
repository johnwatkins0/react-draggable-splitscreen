import React from 'react';
import { render } from 'react-dom';

import DraggableReveal from './app';

function drawDraggableSection(container) {
  const props = {
    left: container.getAttribute('data-left'),
    right: container.getAttribute('data-right'),
    'instruction-text': container.getAttribute('data-instruction-text'),
    'start-at': container.getAttribute('data-start-at'),
    type: container.getAttribute('data-type'),
  };

  render(<DraggableReveal {...props} />, container);
}

function run() {
  const containers = document.querySelectorAll('.draggable-photos-container');
  [].forEach.call(containers, drawDraggableSection);
}

window.addEventListener('load', run);
