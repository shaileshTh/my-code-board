webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reflexbox */ "./node_modules/reflexbox/dist/index.js");
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SingleCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SingleCard */ "./components/SingleCard.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\nuri\\Desktop\\development\\pages\\posts\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Post = function Post(_ref) {
  _s();

  var post = _ref.post;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_7__["UserContext"]),
      user = _useContext.user,
      setUser = _useContext.setUser;

  console.log('current user', user.user.id);
  console.log('post user', post.user);

  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var API_URL;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              API_URL = "http://localhost:1337";
              axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("".concat(API_URL, "/posts/").concat(post.id), {
                headers: {
                  'Authorization': "Bearer ".concat(user.jwt)
                }
              }).then(function (response) {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
              })["catch"](function (error) {
                return console.log(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(reflexbox__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    variant: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(reflexbox__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: {
      _: "100%",
      md: "80%"
    },
    variant: "post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_components_SingleCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), user && __jsx("button", {
    onClick: handleDelete,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Delete")));
};

_s(Post, "74GGDIL3agQW3CqnnuL98bKYYX0=");

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImhhbmRsZURlbGV0ZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiYXhpb3MiLCJoZWFkZXJzIiwiand0IiwidGhlbiIsInJlc3BvbnNlIiwiUm91dGVyIiwiYmFjayIsImVycm9yIiwiXyIsIm1kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsb0JBQ01DLHdEQUFVLENBQUNDLGdFQUFELENBRGhCO0FBQUEsTUFDWkMsSUFEWSxlQUNaQSxJQURZO0FBQUEsTUFDTkMsT0FETSxlQUNOQSxPQURNOztBQUVyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkgsSUFBSSxDQUFDQSxJQUFMLENBQVVJLEVBQXRDO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJOLElBQUksQ0FBQ0csSUFBOUI7O0FBQ0EsTUFBTUssWUFBWTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxxQkFEUyxHQUNHQyx1QkFESDtBQUdqQkMsMERBQUssVUFBTCxXQUFnQkYsT0FBaEIsb0JBQWlDVCxJQUFJLENBQUNPLEVBQXRDLEdBQTRDO0FBQ3hDSyx1QkFBTyxFQUFDO0FBQ0osb0RBQTJCVCxJQUFJLENBQUNVLEdBQWhDO0FBREk7QUFEZ0MsZUFBNUMsRUFJR0MsSUFKSCxDQUlRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQkMsa0VBQU0sQ0FBQ0MsSUFBUDtBQUNILGVBTkQsV0FNUyxVQUFBQyxLQUFLO0FBQUEsdUJBQUliLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxLQUFaLENBQUo7QUFBQSxlQU5kOztBQUhpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVlBLFNBQ0ksTUFBQyw2Q0FBRDtBQUFLLFdBQU8sRUFBRyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQUssU0FBSyxFQUFJO0FBQUNXLE9BQUMsRUFBRSxNQUFKO0FBQVlDLFFBQUUsRUFBRTtBQUFoQixLQUFkO0FBQXNDLFdBQU8sRUFBRyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBSXBCLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLRyxJQUFJLElBQ0w7QUFBUSxXQUFPLEVBQUVLLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixDQURKLENBREo7QUFVSCxDQTFCRDs7R0FBTVQsSTs7S0FBQUEsSTs7QUFnRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcW2lkXS5qcy4xYjhhOTY0MGExMWZkYTJhN2QwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlZmxleGJveCdcclxuaW1wb3J0IFNpbmdsZUNhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaW5nbGVDYXJkJ1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XHJcblxyXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4geyBcclxuICAgIGNvbnN0ICB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQgdXNlcicsIHVzZXIudXNlci5pZClcclxuICAgIGNvbnNvbGUubG9nKCdwb3N0IHVzZXInLCBwb3N0LnVzZXIpXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoYCR7QVBJX1VSTH0vcG9zdHMvJHtwb3N0LmlkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt1c2VyLmp3dH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLmJhY2soKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggdmFyaWFudCA9IFwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGggPSB7e186IFwiMTAwJVwiLCBtZDogXCI4MCVcIn19IHZhcmlhbnQgPSBcInBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxTaW5nbGVDYXJkIHBvc3QgPSB7cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgIHt1c2VyICYmXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+RGVsZXRlPC9idXR0b24+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wb3N0cy9gKTtcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHsgaWQ6IHBvc3QuaWQudG9TdHJpbmcoKSB9XHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm57IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSl7XHJcbiAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcG9zdHMvJHtwYXJhbXMuaWR9YCk7XHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb3N0IH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==