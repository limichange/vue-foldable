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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "64ab303f081b24ef97b4f015a571c0c0"
  },
  {
    "url": "assets/css/2.styles.82cca9bd.css",
    "revision": "04f3ad5eeb9b4d28a77222ce2e8a0290"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.1b32db9a.js",
    "revision": "eaa9e111524d6f94e2577a817289856f"
  },
  {
    "url": "assets/js/1.b652bd79.js",
    "revision": "90d298ed126ba7c27c06f6e7c43b6fb9"
  },
  {
    "url": "assets/js/app.e497ca40.js",
    "revision": "da9da5ff7f30288df1e9aa61e2d9160e"
  },
  {
    "url": "index.html",
    "revision": "9d07a4638737a55a35785d759d99a210"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
