'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resizeIframe;
function resizeIframe(iframe) {
  iframe.style.width = '100%';
  var iframeHeight = iframe.getAttribute('height');
  var iframeWidth = iframe.getAttribute('width');
  var iframeActualWidth = iframe.clientWidth;

  iframe.style.height = iframeHeight / iframeWidth * iframeActualWidth + 'px';
}