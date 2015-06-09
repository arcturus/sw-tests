(function() {
  var swPath = '/sw-tests/permanent-redirect/sw.js';

  navigator.serviceWorker.register(swPath).then(function(registration) {
    console.log('Registration succeeded. Scope is %s', registration.scope);
  }).catch(function(e) {
    console.error('Registration failed.', e);
  });
})(window);