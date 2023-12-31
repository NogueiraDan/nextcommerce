"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=E%3A%5CDaniel%20Nogueira%5CDocuments%5CPrograma%C3%A7%C3%A3o%5CPr%C3%A1ticas%5CNextJS%5Cnextcommerce%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!E:\\Daniel Nogueira\\Documents\\Programação\\Práticas\\NextJS\\nextcommerce\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,514], () => (__webpack_exec__(616)));
module.exports = __webpack_exports__;

})();