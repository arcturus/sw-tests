/* jshint worker:true, -W097 */

/* global fetch, Request, Response, Headers */

'use strict';

console.log('REVISION: %s', 1);

self.addEventListener('fetch', function(e) {
  console.log('OnFetch');
  if (e.request.url.indexOf('fake.html') >= 0) {
    console.log('Redirecting.....');
    e.respondWith(new Response('', {
      status: 301,
      statusText: 'Moved Permanently',
      headers: {
        'Location': '/sw-tests/permanent-redirect/redirected-index.html'
      }
    }));
  }
});
