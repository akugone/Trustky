(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
;// CONCATENATED MODULE: ./next-seo.config.ts
const title = "Trustky";
const description = "Start Fast with XMTP & TalentLayer";
const url = "https://www.yourdomain.com";
/* harmony default export */ const next_seo_config = ({
    title,
    description,
    canonical: url,
    openGraph: {
        type: "website",
        locale: "en_US",
        site_name: "Trustky",
        title,
        description
    }
});

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                ...next_seo_config
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_next_themes_namespaceObject.ThemeProvider, {
                enableSystem: false,
                children: /*#__PURE__*/ jsx_runtime.jsx(react_namespaceObject.SessionProvider, {
                    session: session,
                    children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(340)));
module.exports = __webpack_exports__;

})();