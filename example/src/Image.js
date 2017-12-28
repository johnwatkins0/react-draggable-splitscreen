import React from 'react';

import DraggableSplitscreen from '../../src/DraggableSplitscreen';

const LeftSide = () => (
  <img
    src="/example/assets/left-side.png"
    alt="Left Side"
    style={{ width: '100%', height: 'auto' }}
  />
);

const RightSide = () => (
  <img
    src="/example/assets/right-side.png"
    alt="Right Side"
    style={{ width: '100%', height: 'auto' }}
  />
);

const Image = () => (
  <DraggableSplitscreen leftSide={LeftSide} rightSide={RightSide} />
);

export default Image;
