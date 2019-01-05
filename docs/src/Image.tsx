import * as React from 'react';

import DraggableSplitscreen from '../../src/draggable-splitscreen';

const LeftSide = () => (
  <img
    src="/react-draggable-splitscreen/docs/assets/left-side.png"
    alt="Left Side"
    style={{ width: '100%', height: 'auto' }}
  />
);

const RightSide = () => (
  <img
    src="/react-draggable-splitscreen/docs/assets/right-side.png"
    alt="Right Side"
    style={{ width: '100%', height: 'auto' }}
  />
);

const Image = () => <DraggableSplitscreen leftSide={<LeftSide />} rightSide={<RightSide />} />;

export default Image;
