import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../example/src/Image';
import Text from '../example/src/Text';
import Video from '../example/src/Video';

test('Image-based element renders correctly.', () => {
  const tree = renderer.create(<Image />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Text-based element renders correctly.', () => {
  const tree = renderer.create(<Text />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Video-based element renders correctly.', () => {
  const tree = renderer.create(<Video />).toJSON();

  expect(tree).toMatchSnapshot();
});
