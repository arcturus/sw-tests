# Service Worker Tests

This repo contains various test apps to verify Service Worker behaviour in Firefox Nightly and B2G.

## [/fxos-app] (https://azasypkin.github.io/sw-tests/fxos-app/)

Verifies that fetch event works in Service Worker enabled Firefox OS app.

See the following bugs:

* [Bug 1175949 - Removing SW registered by packaged pre-installed app via about:serviceworkers in b2g crashes Settings/System app](https://bugzilla.mozilla.org/show_bug.cgi?id=1175949) - IN PROGRESS;
* <s>[Bug 1175944 - Packaged app's (app://) JS files are not loaded and do not trigger "onfetch" handler](https://bugzilla.mozilla.org/show_bug.cgi?id=1175944)</s> - FIXED;
* <s>[Bug 1173539 - 3rd party packaged apps controlled by a service worker do not load properly](https://bugzilla.mozilla.org/show_bug.cgi?id=1173539)</s> - WONTFIX;
* <s>[Bug 1174078 - Calling "fetch" inside Service Worker's "onfetch" handler in b2g causes "onfetch" again that leads to an infinite loop](https://bugzilla.mozilla.org/show_bug.cgi?id=1174078)</s> - FIXED;


## [/permanent-redirect] (https://azasypkin.github.io/sw-tests/permanent-redirect/)

Verifies that synthesized permanent redirect response works correctly in Firefox Nightly.

See the following bugs:

* [Bug 1172992 - Synthesized 301 response does not redirect in e10s](https://bugzilla.mozilla.org/show_bug.cgi?id=1172992) - IN PROGRESS.
* <s>[Bug 1172884 - Synthesized permanent redirected response crashes browser](https://bugzilla.mozilla.org/show_bug.cgi?id=1172884)</s> - FIXED;

## [/benchmark-app] (https://azasypkin.github.io/sw-tests/benchmark-app/)

Runs [Raptor] (https://developer.mozilla.org/en-US/Firefox_OS/Automated_testing/Raptor) performance tests for the various benchmarks. Test app just loads one html file, one js file and then requests one json file via ```fetch```.

To run this tests locally, one should follow these steps:

* Checkout both [gaia/apps](https://github.com/mozilla-b2g/gaia) and [sw-tests](https://github.com/azasypkin/sw-tests) repo locally;
* Open [gaia/apps](https://github.com/mozilla-b2g/gaia/tree/master/apps) folder and create symlink to [sw-tests/benchmark-app](https://github.com/azasypkin/sw-tests/tree/master/benchmark-app) there;
* Add the following entries to the Raptor Homescreen config (gaia/node_modules/raptor/dist/homescreens.json). This step will be obsoleted once "[Bug 1169775 - [Raptor] Refactor mozdevice and Raptor to take advantage of Marionette](https://bugzilla.mozilla.org/show_bug.cgi?id=1169775)" is resolved:
  * ```[ "apps", "benchmark-app", "baseline"]```;
  * ```[ "apps", "benchmark-app", "empty-sw"]```;
  * ```[ "apps", "benchmark-app", "fetch-only-sw"]```;
  * ```[ "apps", "benchmark-app", "simple-offline-cache"]```;
* Build Raptor profile with ```make raptor```;
* Run raptor tests for the specified app e.g.:
  * ```RUNS=20 APP=benchmark-app/baseline node tests/raptor/launch_test```;
  * ```RUNS=20 APP=benchmark-app/empty-sw node tests/raptor/launch_test```;
  * ```RUNS=20 APP=benchmark-app/fetch-only-sw node tests/raptor/launch_test```;
  * ```RUNS=20 APP=benchmark-app/simple-offline-cache node tests/raptor/launch_test```.

### Results:
* [15.07.2015, Flame, PVT Eng Build, 20150714160203](#15.07.2015)
  * [Baseline](#15.07.2015-baseline)
  * [Empty SW](#15.07.2015-empty-sw)
  * [SW with fetch only](#15.07.2015-fetch-only-sw)
  * [SimpleOfflineCache](#15.07.2015-simple-offline-cache)


#### <a name="15.07.2015"></a>[15.07.2015][Flame, PVT Eng Build, 20150714160203]
##### <a name="15.07.2015-baseline"></a>Baseline (no SW registered)

|Metric                                  | Mean    | Median  | Min     | Max     | StdDev | p95    |
|--------------------------------------- | ------- | ------- | ------- | ------- | ------ | -------|
|coldlaunch.benchmark-js-file-parsed     | 203.750 | 201.000 | 174.000 | 246.000 | 17.652 | 240.000|
|coldlaunch.benchmark-dom-content-loaded | 235.900 | 233.000 | 205.000 | 282.000 | 19.534 | 270.500|
|coldlaunch.benchmark-payload-loaded     | 278.450 | 275.000 | 248.000 | 348.000 | 23.064 | 332.500|
|coldlaunch.benchmark-load               | 281.050 | 277.500 | 249.000 | 350.000 | 22.938 | 334.500|
|coldlaunch.benchmark-payload-read       | 329.600 | 325.000 | 303.000 | 390.000 | 20.548 | 378.500|
|coldlaunch.fullyLoaded                  | 329.700 | 325.000 | 304.000 | 390.000 | 20.577 | 379.000|
|coldlaunch.uss                          | 9.295   | 9.300   | 9.200   | 9.500   | 0.059  | 9.400  |
|coldlaunch.rss                          | 27.660  | 27.700  | 27.500  | 27.800  | 0.066  | 27.750 |
|coldlaunch.pss                          | 13.590  | 13.600  | 13.500  | 13.700  | 0.044  | 13.650 |

##### <a name="15.07.2015-empty-sw"></a>With empty SW (SW registered, but it's empty)

|Metric                                  | Mean    | Median  | Min     | Max     | StdDev | p95    |
|--------------------------------------- | ------- | ------- | ------- | ------- | ------ | -------|
|coldlaunch.benchmark-js-file-parsed     | 557.700 | 545.000 | 507.000 | 696.000 | 47.609 | 677.500|
|coldlaunch.benchmark-load               | 574.050 | 563.000 | 524.000 | 710.000 | 46.599 | 691.000|
|coldlaunch.benchmark-payload-loaded     | 656.550 | 644.500 | 603.000 | 790.000 | 47.854 | 773.000|
|coldlaunch.benchmark-payload-read       | 661.150 | 649.500 | 610.000 | 794.000 | 47.097 | 776.000|
|coldlaunch.fullyLoaded                  | 661.600 | 650.000 | 610.000 | 794.000 | 47.164 | 776.500|
|coldlaunch.pss                          | 15.205  | 15.200  | 15.100  | 15.700  | 0.120  | 15.450 |
|coldlaunch.rss                          | 29.550  | 29.500  | 29.400  | 29.800  | 0.081  | 29.700 |
|coldlaunch.uss                          | 10.785  | 10.750  | 10.600  | 11.500  | 0.177  | 11.200 |

##### <a name="15.07.2015-fetch-only-sw"></a>With SW that does ```e.respondWith(fetch(e.request))``` for every fetch request

|Metric                                  | Mean    | Median  | Min     | Max     | StdDev | p95    |
|--------------------------------------- | ------- | ------- | ------- | ------- | ------ | -------|
|coldlaunch.benchmark-js-file-parsed  |603.650  |588.000  |566.000  |727.000  |41.622  |701.500|
|coldlaunch.benchmark-load            |616.950  |601.500  |580.000  |739.000  |41.333  |714.500|
|coldlaunch.benchmark-payload-loaded  |678.250  |664.000  |639.000  |798.000  |39.416  |772.000|
|coldlaunch.benchmark-payload-read    |680.450  |666.000  |641.000  |800.000  |39.271  |774.000|
|coldlaunch.fullyLoaded               |681.350  |667.500  |642.000  |800.000  |39.170  |774.500|
|coldlaunch.uss                       |10.925   |10.900   |10.700   |11.600   |0.170   |11.350 |
|coldlaunch.pss                       |15.310   |15.300   |15.200   |15.500   |0.054   |15.450 |
|coldlaunch.rss                       |29.675   |29.700   |29.400   |29.700   |0.077   |29.700|

##### <a name="15.07.2015-simple-offline-cache"></a>With SimpleOfflineCache from ServiceWorkerWare

|Metric                                  | Mean    | Median  | Min     | Max     | StdDev | p95    |
|--------------------------------------- | ------- | ------- | ------- | ------- | ------ | -------|
|coldlaunch.benchmark-js-file-parsed  |668.100  |673.500  |615.000  |758.000  |33.238  |742.500|
|coldlaunch.benchmark-load            |681.700  |688.000  |627.000  |771.000  |33.534  |755.000|
|coldlaunch.benchmark-payload-loaded  |760.850  |750.000  |710.000  |874.000  |39.190  |855.500|
|coldlaunch.benchmark-payload-read    |762.850  |751.500  |714.000  |876.000  |39.121  |857.500|
|coldlaunch.fullyLoaded               |763.600  |752.500  |715.000  |877.000  |39.121  |858.500|
|coldlaunch.uss                       |11.465   |11.400   |11.200   |12.400   |0.269   |12.000 |
|coldlaunch.pss                       |15.900   |15.850   |15.700   |16.600   |0.230   |16.350 |
|coldlaunch.rss                       |30.300   |30.200   |30.100   |30.700   |0.210   |30.600|

