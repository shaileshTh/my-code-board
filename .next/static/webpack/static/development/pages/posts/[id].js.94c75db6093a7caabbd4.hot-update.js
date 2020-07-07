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
      setUser = _useContext.setUser; // console.log('current user', user.user.id)
  // console.log('post user', post.user.id)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImhhbmRsZURlbGV0ZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiYXhpb3MiLCJpZCIsImhlYWRlcnMiLCJqd3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJSb3V0ZXIiLCJiYWNrIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiXyIsIm1kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsb0JBQ01DLHdEQUFVLENBQUNDLGdFQUFELENBRGhCO0FBQUEsTUFDWkMsSUFEWSxlQUNaQSxJQURZO0FBQUEsTUFDTkMsT0FETSxlQUNOQSxPQURNLEVBRXJCO0FBQ0E7OztBQUNBLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMscUJBRFMsR0FDR0MsdUJBREg7QUFHakJDLDBEQUFLLFVBQUwsV0FBZ0JGLE9BQWhCLG9CQUFpQ04sSUFBSSxDQUFDUyxFQUF0QyxHQUE0QztBQUN4Q0MsdUJBQU8sRUFBQztBQUNKLG9EQUEyQlAsSUFBSSxDQUFDUSxHQUFoQztBQURJO0FBRGdDLGVBQTVDLEVBSUdDLElBSkgsQ0FJUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJDLGtFQUFNLENBQUNDLElBQVA7QUFDSCxlQU5ELFdBTVMsVUFBQUMsS0FBSztBQUFBLHVCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsZUFOZDs7QUFIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlgsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFZQSxTQUNJLE1BQUMsNkNBQUQ7QUFBSyxXQUFPLEVBQUcsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFLLFNBQUssRUFBSTtBQUFDYyxPQUFDLEVBQUUsTUFBSjtBQUFZQyxRQUFFLEVBQUU7QUFBaEIsS0FBZDtBQUFzQyxXQUFPLEVBQUcsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBWSxRQUFJLEVBQUlwQixJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFS0csSUFBSSxJQUNMO0FBQVEsV0FBTyxFQUFFRSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosQ0FESixDQURKO0FBVUgsQ0ExQkQ7O0dBQU1OLEk7O0tBQUFBLEk7O0FBZ0RTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtpZF0uanMuOTRjNzVkYjYwOTNhN2NhYWJiZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWZsZXhib3gnXHJcbmltcG9ydCBTaW5nbGVDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2luZ2xlQ2FyZCdcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHsgXHJcbiAgICBjb25zdCAgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IHVzZXInLCB1c2VyLnVzZXIuaWQpXHJcbiAgICAvLyBjb25zb2xlLmxvZygncG9zdCB1c2VyJywgcG9zdC51c2VyLmlkKVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnZcclxuXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKGAke0FQSV9VUkx9L3Bvc3RzLyR7cG9zdC5pZH1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dXNlci5qd3R9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5iYWNrKClcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHZhcmlhbnQgPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoID0ge3tfOiBcIjEwMCVcIiwgbWQ6IFwiODAlXCJ9fSB2YXJpYW50ID0gXCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlQ2FyZCBwb3N0ID0ge3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlciAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcG9zdHMvYCk7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBwb3N0LmlkLnRvU3RyaW5nKCkgfVxyXG4gICAgfSkpXHJcblxyXG4gICAgcmV0dXJueyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pe1xyXG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Bvc3RzLyR7cGFyYW1zLmlkfWApO1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdCB9IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=