import React from 'react';

import DraggableSplitscreen from '../../src/DraggableSplitscreen';

const Text = () => (
  <DraggableSplitscreen
    leftSide={() => (
      <div style={{ backgroundColor: 'blue', padding: '6rem' }}>
        <h2>
          <a style={{ color: 'white' }} href="#">
            Left side
          </a>
        </h2>
      </div>
    )}
    rightSide={() => (
      <div
        style={{
          backgroundColor: 'red',
          padding: '6rem',
          textAlign: 'right',
        }}
      >
        <h2>
          <a style={{ color: 'white' }} href="#">
            Right side
          </a>
        </h2>
      </div>
    )}
  />
);

export default Text;
