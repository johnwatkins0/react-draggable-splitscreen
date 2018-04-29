import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../../example/src/Image';
import Text from '../../example/src/Text';
import Video from '../../example/src/Video';

describe('DraggableSplitscreen', () => {
  it('renders an image-based element.', () => {
    const tree = renderer.create(<Image />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a text-based element', () => {
    const tree = renderer.create(<Text />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a video-based element', () => {
    const tree = renderer.create(<Video />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

