'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawDraggableSection(container) {
  var props = {
    left: container.getAttribute('data-left'),
    right: container.getAttribute('data-right'),
    'instruction-text': container.getAttribute('data-instruction-text'),
    'start-at': container.getAttribute('data-start-at'),
    type: container.getAttribute('data-type')
  };

  (0, _reactDom.render)(_react2.default.createElement(_app2.default, props), container);
}

function run() {
  var containers = document.querySelectorAll('.draggable-photos-container');
  [].forEach.call(containers, drawDraggableSection);
}

window.addEventListener('load', run);