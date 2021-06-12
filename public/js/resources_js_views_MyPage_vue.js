(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MyPage_vue"],{

/***/ "./resources/js/views/MyPage.vue":
/*!***************************************!*\
  !*** ./resources/js/views/MyPage.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyPage_vue_vue_type_template_id_052f42ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyPage.vue?vue&type=template&id=052f42ba& */ "./resources/js/views/MyPage.vue?vue&type=template&id=052f42ba&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _MyPage_vue_vue_type_template_id_052f42ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyPage_vue_vue_type_template_id_052f42ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MyPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/MyPage.vue?vue&type=template&id=052f42ba&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/MyPage.vue?vue&type=template&id=052f42ba& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPage_vue_vue_type_template_id_052f42ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPage_vue_vue_type_template_id_052f42ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPage_vue_vue_type_template_id_052f42ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPage.vue?vue&type=template&id=052f42ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MyPage.vue?vue&type=template&id=052f42ba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MyPage.vue?vue&type=template&id=052f42ba&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MyPage.vue?vue&type=template&id=052f42ba& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("body", [
      _c("section", { staticClass: "main mt-5" }, [
        _c("div", { staticClass: "container d-flex justify-content-between" }, [
          _c("div", { staticClass: "main__friendlist col-4" }, [
            _c("div", { staticClass: "friendlist-title mb-2 ml-5" }, [
              _vm._v("Друзья: 6")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "friendlist-roster" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "main__post-group d-flex flex-column h-25 p-0 col-4"
            },
            [
              _c(
                "form",
                {
                  staticClass: "main__post-form col-12 p-0",
                  attrs: { action: "" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 d-flex justify-content-end align-items-center flex-column"
                    },
                    [
                      _c("input", {
                        attrs: { id: "postFormFile", type: "file" }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass:
                            "post__form-file d-flex col-12 justify-content-end p-0",
                          attrs: { for: "postFormFile" }
                        },
                        [_c("div")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "post__form-text col-12 d-flex pr-4 pl-2",
                        attrs: { type: "text" }
                      }),
                      _vm._v(" "),
                      _c("ul", { staticClass: "post__form-attach__files" }, [
                        _c("li")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { id: "postFormText", type: "submit" }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass:
                            "post__form-submit col-12 justify-content-center p-0 d-flex",
                          attrs: { for: "postFormSubmit" }
                        },
                        [_vm._v("Опубликовать")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "main__post-note mt-2" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "post__note-title d-flex justify-content-start pl-3 pr-3 mb-2 mt-1"
                  },
                  [_vm._v("Название поста")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "post__note-footer pt-1 pb-1 d-flex col-12 justify-content-around mb-2"
                  },
                  [
                    _c("div", { staticClass: "note__footer-edit" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "note-group__active d-flex justify-content-between col-4"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "footer-note__like-group d-flex" },
                          [
                            _c("div", { staticClass: "note__footer-like" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "note__footer-like__number ml-1" },
                              [_vm._v("12")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "note__footer-repost" })
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);