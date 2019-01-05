import * as React from 'react';
import Draggable from 'react-draggable';

import Container from './container';
import Handle from './handle';
import RightSide from './right-side';

interface DraggableSplitscreenProps {
  leftSide: any;
  rightSide: any;
}

/**
 * The main component.
 */
export default function DraggableSplitscreen({ leftSide, rightSide }: DraggableSplitscreenProps) {
  const [rightPosition, setRightPosition] = React.useState(0);
  const draggable = React.useRef(null);

  function onDrag() {
    setRightPosition(draggable.current.state.x);
  }

  const clipPath = `inset(0 0 0 calc(50% + ${rightPosition}px))`;

  return (
    <Container>
      <div>{leftSide}</div>
      <RightSide clipPathStyle={clipPath}>{rightSide}</RightSide>
      <Draggable ref={draggable} bounds="parent" axis="x" onDrag={onDrag}>
        <Handle />
      </Draggable>
    </Container>
  );
}
