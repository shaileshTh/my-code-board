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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      error = _useState[0],
      setError = _useState[1];

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
                setError('Post deleted. You might need to refresh the page');
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
              })["catch"](function (error) {
                setError('This is not your post');
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
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_components_SingleCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), user && __jsx("button", {
    onClick: handleDelete,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Delete"), error && __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 27
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 55
    }
  }), error)));
};

_s(Post, "p1ZdTXrqrboixkM+/PiysLH8aXw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZURlbGV0ZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiYXhpb3MiLCJpZCIsImhlYWRlcnMiLCJqd3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJSb3V0ZXIiLCJiYWNrIiwiXyIsIm1kIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSxvQkFDTUMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FEaEI7QUFBQSxNQUNaQyxJQURZLGVBQ1pBLElBRFk7QUFBQSxNQUNOQyxPQURNLGVBQ05BLE9BRE07O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFZEMsS0FGYztBQUFBLE1BRVBDLFFBRk87O0FBSXJCLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMscUJBRFMsR0FDR0MsdUJBREg7QUFHakJDLDBEQUFLLFVBQUwsV0FBZ0JGLE9BQWhCLG9CQUFpQ1QsSUFBSSxDQUFDWSxFQUF0QyxHQUE0QztBQUN4Q0MsdUJBQU8sRUFBQztBQUNKLG9EQUEyQlYsSUFBSSxDQUFDVyxHQUFoQztBQURJO0FBRGdDLGVBQTVDLEVBSUdDLElBSkgsQ0FJUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJULHdCQUFRLENBQUMsa0RBQUQsQ0FBUjtBQUNBVSxrRUFBTSxDQUFDQyxJQUFQO0FBQ0gsZUFQRCxXQU9TLFVBQUFaLEtBQUssRUFBSTtBQUNkQyx3QkFBUSxDQUFDLHVCQUFELENBQVI7QUFDSCxlQVREOztBQUhpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaQyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWVBLFNBQ0ksTUFBQyw2Q0FBRDtBQUFLLFdBQU8sRUFBRyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQUssU0FBSyxFQUFJO0FBQUNXLE9BQUMsRUFBRSxNQUFKO0FBQVlDLFFBQUUsRUFBRTtBQUFoQixLQUFkO0FBQXNDLFdBQU8sRUFBRyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBSXBCLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVLRyxJQUFJLElBQ0w7QUFBUSxXQUFPLEVBQUVLLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQUtLRixLQUFLLElBQUk7QUFBSSxTQUFLLEVBQUk7QUFBQ2UsV0FBSyxFQUFDO0FBQVAsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBNUIsRUFBa0NmLEtBQWxDLENBTGQsQ0FESixDQURKO0FBV0gsQ0E5QkQ7O0dBQU1QLEk7O0tBQUFBLEk7O0FBb0RTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtpZF0uanMuYTI0ZTE1OGU1NTA4NzE0ODk2OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmVmbGV4Ym94J1xyXG5pbXBvcnQgU2luZ2xlQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZUNhcmQnXHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7IFxyXG4gICAgY29uc3QgIHsgdXNlciwgc2V0VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoYCR7QVBJX1VSTH0vcG9zdHMvJHtwb3N0LmlkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt1c2VyLmp3dH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ1Bvc3QgZGVsZXRlZC4gWW91IG1pZ2h0IG5lZWQgdG8gcmVmcmVzaCB0aGUgcGFnZScpXHJcbiAgICAgICAgICAgIFJvdXRlci5iYWNrKClcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdUaGlzIGlzIG5vdCB5b3VyIHBvc3QnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHZhcmlhbnQgPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoID0ge3tfOiBcIjEwMCVcIiwgbWQ6IFwiODAlXCJ9fSB2YXJpYW50ID0gXCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlQ2FyZCBwb3N0ID0ge3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlciAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8aDIgc3R5bGUgPSB7e2NvbG9yOidyZWQnfX0+PGJyLz57ZXJyb3J9PC9oMj59XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnZcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Bvc3RzL2ApO1xyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczogeyBpZDogcG9zdC5pZC50b1N0cmluZygpIH1cclxuICAgIH0pKVxyXG5cclxuICAgIHJldHVybnsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KXtcclxuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wb3N0cy8ke3BhcmFtcy5pZH1gKTtcclxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3QgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9