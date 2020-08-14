import * as React from 'react';

import DraggableSplitscreen from '../draggable-splitscreen';
import leftSideImage from '../assets/left-side.png';
import rightSideImage from '../assets/right-side.png';

function LeftSide() {
  return <img src={leftSideImage} alt="Left Side" />;
}

function RightSide() {
  return <img src={rightSideImage} alt="Right Side" />;
}

export default function Image() {
  return <DraggableSplitscreen leftSide={<LeftSide />} rightSide={<RightSide />} />;
}
