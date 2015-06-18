# Service Worker Tests

This repo contains various test apps to verify Service Worker behaviour in Firefox Nightly and B2G.

## [/fxos-app] (https://azasypkin.github.io/sw-tests/fxos-app/)

Verifies that fetch event works in Service Worker enabled Firefox OS app.

See the following bugs:

* [Bug 1175944 - Packaged app's (app://) JS files are not loaded and do not trigger "onfetch" handler](https://bugzilla.mozilla.org/show_bug.cgi?id=1175944) - In Progress;
* [Bug 1175949 - Removing SW registered by packaged pre-installed app via about:serviceworkers in b2g crashes Settings/System app](https://bugzilla.mozilla.org/show_bug.cgi?id=1175949) - In Progress;
* [Bug 1173539 - 3rd party packaged apps controlled by a service worker do not load properly](https://bugzilla.mozilla.org/show_bug.cgi?id=1173539) - On Hold;
* <s>[Bug 1174078 - Calling "fetch" inside Service Worker's "onfetch" handler in b2g causes "onfetch" again that leads to an infinite loop](https://bugzilla.mozilla.org/show_bug.cgi?id=1174078)</s> - Fixed;


## [/permanent-redirect] (https://azasypkin.github.io/sw-tests/permanent-redirect/)

Verifies that synthesized permanent redirect response works correctly in Firefox Nightly.

See the following bugs:

* [Bug 1172992 - Synthesized 301 response does not redirect in e10s](https://bugzilla.mozilla.org/show_bug.cgi?id=1172992) - In Progress.
* <s>[Bug 1172884 - Synthesized permanent redirected response crashes browser](https://bugzilla.mozilla.org/show_bug.cgi?id=1172884)</s> - Fixed;

