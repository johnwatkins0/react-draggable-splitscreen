import * as React from 'react';
import Draggable from 'react-draggable';

import Container from './container';
import Handle from './handle';
import RightSide from './right-side';
import { LeftSide } from './left-side';

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

  const onDrag = React.useCallback(() => {
    setRightPosition(draggable.current.state.x);
  }, [])

  const clipPathStyle = { clipPath: `inset(0 0 0 calc(50% + ${rightPosition}px))` };

  return (
    <Container>
      <LeftSide>{leftSide}</LeftSide>
      <RightSide clipPathStyle={clipPathStyle}>{rightSide}</RightSide>
      <Draggable ref={draggable} bounds="parent" axis="x" onDrag={onDrag}>
        <Handle />
      </Draggable>
    </Container>
  );
}
