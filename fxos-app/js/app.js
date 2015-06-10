console.log('Startup-File-Parsed');

function initServiceWorker() {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    console.log('Registration failed with ' + error);
  });
}

function doAnyAppAction() {
  document.querySelector('.yellow-div').style.backgroundColor = 'green';
}

doAnyAppAction();
initServiceWorker();