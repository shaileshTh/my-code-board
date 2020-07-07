webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "C:\\Users\\nuri\\Desktop\\development\\components\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    border: 1px solid #cccccc;\n    margin-top: 50px;\n    border-radius: 20px;\n    overflow: hidden;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\n    .body{\n        padding: 20px;\n\n        h3{\n            margin-bottom: 20px;\n        }\n\n        p{\n            color: #666666;\n            line-height: 1.5;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-style:italic;\n    text-align:center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-style:italic;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function Card(_ref) {
  var post = _ref.post;
  var API_URL = "http://localhost:1337";
  return __jsx(CardStyled, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, post.post_title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, post.user), __jsx("p", {
    style: {
      color: "black",
      fontSize: "1.3em"
    },
    dangerouslySetInnerHTML: {
      __html: post.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(Likes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, post.likes, " likes")));
}

_c = Card;
var Author = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject());
var Likes = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject2());
_c2 = Likes;
var CardStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
_c3 = CardStyled;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c, _c2, _c3;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "Likes");
$RefreshReg$(_c3, "CardStyled");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInBvc3QiLCJBUElfVVJMIiwicHJvY2VzcyIsInBvc3RfdGl0bGUiLCJ1c2VyIiwiY29sb3IiLCJmb250U2l6ZSIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwibGlrZXMiLCJBdXRob3IiLCJzdHlsZWQiLCJwIiwiTGlrZXMiLCJDYXJkU3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFBQSxNQUVaQyxPQUZZLEdBRUFDLHVCQUZBO0FBSXBCLFNBQ0ksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRixJQUFJLENBQUNHLFVBQVgsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUgsSUFBSSxDQUFDSSxJQUFULENBRkosRUFJSTtBQUFHLFNBQUssRUFBSTtBQUFDQyxXQUFLLEVBQUMsT0FBUDtBQUFnQkMsY0FBUSxFQUFFO0FBQTFCLEtBQVo7QUFBZ0QsMkJBQXVCLEVBQUk7QUFBRUMsWUFBTSxFQUFFUCxJQUFJLENBQUNRO0FBQWYsS0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0ksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVIsSUFBSSxDQUFDUyxLQUFiLFdBTEosQ0FESixDQURKO0FBV0g7O0tBZlFWLEk7QUFpQlQsSUFBTVcsTUFBTSxHQUFHQyx1REFBTSxDQUFDQyxDQUFWLG1CQUFaO0FBSUEsSUFBTUMsS0FBSyxHQUFHRix1REFBTSxDQUFDQyxDQUFWLG9CQUFYO01BQU1DLEs7QUFJTixJQUFNQyxVQUFVLEdBQUdILHVEQUFNLENBQUNJLEdBQVYsb0JBQWhCO01BQU1ELFU7QUFxQlNmLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42MzFiYWM4ZDgyZmVhYWNiY2FjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5mdW5jdGlvbiBDYXJkICh7IHBvc3QgfSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDYXJkU3R5bGVkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPnsgcG9zdC5wb3N0X3RpdGxlIH08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QudXNlcn08L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogPEF1dGhvcj5ieSA8Zm9udCBzdHlsZSA9IHt7Y29sb3I6XCJibGFja1wiLCB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIn19Pntwb3N0LnVzZXIudXNlcm5hbWV9PC9mb250PjwvQXV0aG9yPjxici8+ICovfVxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7e2NvbG9yOlwiYmxhY2tcIiwgZm9udFNpemU6IFwiMS4zZW1cIn19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge3sgX19odG1sOiBwb3N0LmRlc2NyaXB0aW9uIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlrZXM+e3Bvc3QubGlrZXN9IGxpa2VzPC9MaWtlcz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkU3R5bGVkPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBBdXRob3IgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG5gXHJcblxyXG5jb25zdCBMaWtlcyA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuYFxyXG5jb25zdCBDYXJkU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAuYm9keXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==