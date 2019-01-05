import React from 'react';

import DraggableSplitscreen from '../../src/draggable-splitscreen';

const Left = () => (
  <div style={{ backgroundColor: 'blue', padding: '6rem' }}>
    <h2>Left side</h2>
  </div>
);

const Right = () => (
  <div
    style={{
      backgroundColor: 'red',
      padding: '6rem',
      textAlign: 'right',
    }}
  >
    <h2>Right side</h2>
  </div>
);

const Text = () => <DraggableSplitscreen leftSide={<Left />} rightSide={<Right />} />;

export default Text;
