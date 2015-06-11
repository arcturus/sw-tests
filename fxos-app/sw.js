/* jshint worker:true, -W097 */
/* global fetch */

'use strict';

self.addEventListener('fetch', (e) => {
  console.log('Fetch event received %s', e.request.url);

  e.respondWith(fetch(e.request));
});
