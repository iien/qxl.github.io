/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0bb5dc062748b3db297dcea584e28e3d"
  },
  {
    "url": "about/index.html",
    "revision": "dcf8dd93a0fe6d6fd5a21e3a6d199ae1"
  },
  {
    "url": "assets/css/0.styles.e9ed429c.css",
    "revision": "a5837a1c56f04f4d7520d9f89d845f34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.903586d7.js",
    "revision": "ef8ffa0433a20d5f031c4ab2a2662bfb"
  },
  {
    "url": "assets/js/11.10b2d3ce.js",
    "revision": "832d53775e9582c9fa17e2523d52e2f1"
  },
  {
    "url": "assets/js/12.6e5bbcc7.js",
    "revision": "5de0477fc6cfff2f4882024d72ec86c1"
  },
  {
    "url": "assets/js/13.982ce1d0.js",
    "revision": "e67cf8087e614be224dca9ab1b2f87a5"
  },
  {
    "url": "assets/js/14.2b21f1cb.js",
    "revision": "b70277709ad99d1078b0d68d979f86f2"
  },
  {
    "url": "assets/js/15.dbd5cef3.js",
    "revision": "e012a0f7fbc03de7f49543d186f6f92d"
  },
  {
    "url": "assets/js/16.1e05176e.js",
    "revision": "d0b19650d036848d6cd1097aa1e36359"
  },
  {
    "url": "assets/js/17.34450871.js",
    "revision": "1bd9d6cbf1102596beaa9e697782c696"
  },
  {
    "url": "assets/js/18.21301368.js",
    "revision": "89ccab13eff3586dd21e4b7c3f1f6a34"
  },
  {
    "url": "assets/js/19.a671d3e7.js",
    "revision": "adf2d533dbda27eb9d79525f7c7bd565"
  },
  {
    "url": "assets/js/2.118380fc.js",
    "revision": "a6a8fe6d31de1d5cf16bbbe3738e4f6b"
  },
  {
    "url": "assets/js/20.54811258.js",
    "revision": "59c2e339d8394087d0d0a81fb9013754"
  },
  {
    "url": "assets/js/21.a65c2c46.js",
    "revision": "48c7c2bff7b628a3e1b0ad9afc2ca382"
  },
  {
    "url": "assets/js/22.f32633f4.js",
    "revision": "0f53ee8397408adb5ca0a68fb3ffe11a"
  },
  {
    "url": "assets/js/23.6195881a.js",
    "revision": "b222d1c563ee393416f3880a33f67c83"
  },
  {
    "url": "assets/js/3.411ea822.js",
    "revision": "bf13c7309952acd925ad947c4a4ac793"
  },
  {
    "url": "assets/js/4.d9ccf79e.js",
    "revision": "951aad84dc8e9da87890511ead27258c"
  },
  {
    "url": "assets/js/5.5e2eacdf.js",
    "revision": "45e164da20e584575ab2e7401c4a7dc2"
  },
  {
    "url": "assets/js/6.6c4229a0.js",
    "revision": "3e957a80b3b58a5144eeab1fc2deb0e3"
  },
  {
    "url": "assets/js/7.4408bccc.js",
    "revision": "57dae3384f54cb1a1e03f47c46b61191"
  },
  {
    "url": "assets/js/8.2119c672.js",
    "revision": "f133463a464d7e2caef448fbf73358cf"
  },
  {
    "url": "assets/js/9.72fa30ee.js",
    "revision": "4e60410846697f606078b3ae73974879"
  },
  {
    "url": "assets/js/app.75d9b984.js",
    "revision": "1c73ec718b2a15bb78a95acf0667bcac"
  },
  {
    "url": "friends/index.html",
    "revision": "62d8552162deec99b8230f4dcce4fe29"
  },
  {
    "url": "guide/index.html",
    "revision": "c0d153c5b3a8c8f6b9206171693a55e7"
  },
  {
    "url": "index.html",
    "revision": "eb1395bc20660b62b6fad5f0e8c4b47f"
  },
  {
    "url": "logo.png",
    "revision": "a90928fb8716f1a5d1fe76217683de3c"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-001/index.html",
    "revision": "e9412d51553172c8613d3e29049ca2de"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-002/index.html",
    "revision": "54c3a8268450b078d2da7d8008e20487"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-003/index.html",
    "revision": "649a8c6240f85fb70b3b77ef17abdf9c"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-004/index.html",
    "revision": "37c04a83996c97af786609b344f8620c"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-005/index.html",
    "revision": "a6a1e5d8a64ef4822fe2c160a60c635c"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-006/index.html",
    "revision": "12a945a0196a82caf0dbb003727f4b68"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-007/index.html",
    "revision": "816c5aa9e92c2dad5d3647fd3d3166bd"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-008/index.html",
    "revision": "a361d5701555b74220f6fa2a2dd5f8fd"
  },
  {
    "url": "press/2019-6-29-spingcloud-basic-009/index.html",
    "revision": "7f0787d9ccc309d32e0379b7a840f3ea"
  },
  {
    "url": "press/2019-6-29-spingcloud/index.html",
    "revision": "2d5da6af1877bfb0fab61cfa4aed7cf5"
  },
  {
    "url": "press/2019-8-4-gitlab-01-010/index.html",
    "revision": "ff8c6a9303d5aa0702c4574a56f42a39"
  },
  {
    "url": "press/2019-8-4-gitlab/index.html",
    "revision": "bc9a75eafb6d6b0449d8a0a6193ef718"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
