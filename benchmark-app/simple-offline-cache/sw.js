'use strict';

importScripts('lib/sww.js');

const worker = new self.ServiceWorkerWare();

worker.use(new self.StaticCacher(['index.html', 'js/app.js', 'payload.json']));
worker.use(new self.SimpleOfflineCache());

worker.init();

console.log('SW ready to serve');
