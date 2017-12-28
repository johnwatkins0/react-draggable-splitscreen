import React from 'react';

import DraggableSplitscreen from '../../src/DraggableSplitscreen';

const Video = () => (
  <DraggableSplitscreen
    leftSide={() => (
      <video
        style={{ width: '100%', height: 'auto', objectFit: 'inherit' }}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        loop
        muted
        autoPlay
      />
    )}
    rightSide={() => (
      <video
        style={{ width: '100%', height: 'auto', objectFit: 'inherit' }}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        loop
        muted
        autoPlay
      />
    )}
  />
);

export default Video;
