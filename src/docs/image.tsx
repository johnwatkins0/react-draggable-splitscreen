import * as React from 'react';

import DraggableSplitscreen from '../draggable-splitscreen';
import leftSideImage from '../assets/left-side.png';
import rightSideImage from '../assets/right-side.png';

function LeftSide() {
  return <img src={leftSideImage} alt="Left Side" style={{ width: '100%', height: '100%' }} />;
}

function RightSide() {
  return <img src={rightSideImage} alt="Right Side" style={{ width: '100%', height: '100%' }} />;
}

export default function Image() {
  return <DraggableSplitscreen leftSide={<LeftSide />} rightSide={<RightSide />} />;
}
