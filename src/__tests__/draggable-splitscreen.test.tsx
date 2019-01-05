import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Image from '../docs/image';
import Text from '../docs/text';
import Video from '../docs/video';

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
