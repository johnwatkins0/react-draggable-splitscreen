export default function resizeIframe(iframe) {
  iframe.style.width = '100%';
  const iframeHeight = iframe.getAttribute('height');
  const iframeWidth = iframe.getAttribute('width');
  const iframeActualWidth = iframe.clientWidth;

  iframe.style.height = `${iframeHeight / iframeWidth * iframeActualWidth}px`;
}
