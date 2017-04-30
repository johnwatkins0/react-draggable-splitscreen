'use strict';
console.log('what');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function drawDraggableSectionWithImages(settings) {
  var props = { image1: settings.image1, image2: settings.image2 };

  (0, _reactDom.render)(
    _react2.default.createElement(_app2.default, props),
    settings.container
  );
}

function drawDraggableSection(container) {
  var image1 = container.getAttribute('data-image-1') ||
    container.getAttribute('data-1');
  var image2 = container.getAttribute('data-image-2') ||
    container.getAttribute('data-1');

  if (image1 && image2) {
    drawDraggableSectionWithImages({
      container: container,
      image1: image1,
      image2: image2
    });
  }
}

function run() {
  var containers = document.querySelectorAll('.draggable-photos-container');
  [].forEach.call(containers, drawDraggableSection);
}

window.addEventListener('load', run);
