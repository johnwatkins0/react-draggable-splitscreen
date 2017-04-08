import React from 'react';
import { render } from 'react-dom';
import Draggable from 'react-draggable';

export default class DraggablePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rightPosition: 0 };
  }

  render() {
    return (
      <div className="draggable-photos">
        <div className="draggable-photos__container">
          <img src={this.props.image1} />
        </div>
        <div
          style={{
            width: `calc(50% + ${this.state.rightPosition}px)`,
            backgroundImage: `url(${this.props.image2})`
          }}
          className="draggable-photos__container"
        />
        <Draggable
          handle=".handle"
          ref={draggable => this.draggable = draggable}
          zIndex={100}
          axis="x"
          onDrag={event =>
            this.setState({ rightPosition: this.draggable.state.x })}
        >
          <div>
            <div className="handle" />
          </div>
        </Draggable>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const containers = document.querySelectorAll('.draggable-photos-container');

  if (!containers) {
    return;
  }

  [].forEach.call(containers, container => {
    const image1 = container.getAttribute('data-1');
    const image2 = container.getAttribute('data-2');

    if (!(image1 && image2)) {
      return;
    }

    const props = { image1, image2 };

    render(<DraggablePhotos {...props} />, container);
  });
});
