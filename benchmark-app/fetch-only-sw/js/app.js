/* global fetch, performance */

(function(exports) {
  'use strict';

  performance.mark('benchmark-js-file-parsed');

  exports.document.addEventListener('DOMContentLoaded', () => {
    performance.mark('benchmark-dom-content-loaded');
  });

  exports.addEventListener('load', () => {
    performance.mark('benchmark-load');
  });

  fetch('payload.json').then((response) => {
    performance.mark('benchmark-payload-loaded');
    return response.json();
  }).then(() => {
    performance.mark('benchmark-payload-read');
    performance.mark('fullyLoaded');
  });
})(self);
