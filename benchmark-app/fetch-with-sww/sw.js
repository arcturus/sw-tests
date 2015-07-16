'use strict';

importScripts('lib/sww.js');

const worker = new self.ServiceWorkerWare();

worker.use({
  onFetch: function(request) {
    return fetch(request);
  }
});

worker.init();
