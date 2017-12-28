# react-draggable-splitscreen

A React component for displaying overlapping elements with a draggable splitscreen-like effect. See examples [here](https://johnwatkins0.github.io/react-draggable-splitscreen/example/).

## Install

```
yarn add react-draggable-splitscreen
```

## Usage

The component takes two props, `leftSide` and `rightSide`, both of which must be React elements/components.

```Javascript
import React from 'react';
import Splitscreen from 'react-draggable-splitscreen';

const MyLeftSide = () => <img src="some/image" />;
const MyRightSide = () => <img src="some/other/image" />;

const MyElement = () => <Splitscreen leftSide={MyLeftSide} rightSide={MyRightSide} />
```

