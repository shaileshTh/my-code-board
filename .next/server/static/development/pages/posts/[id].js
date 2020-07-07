module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SingleCard.js":
/*!**********************************!*\
  !*** ./components/SingleCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\nuri\\Desktop\\development\\components\\SingleCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SingleCard({
  post
}) {
  const {
    API_URL
  } = process.env;
  const date = post.updated_at;
  const displayText = post.description.replace(/\n/g, "<br />");
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(CardStyled, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, post.post_title), __jsx(Author, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "last updated ", date.substring(0, 10), " by ", __jsx("font", {
    style: {
      color: "black",
      textDecoration: "underline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 68
    }
  }, post.user.username)), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 165
    }
  }), __jsx("p", {
    style: {
      color: "black",
      fontSize: "1.5em"
    },
    dangerouslySetInnerHTML: {
      __html: displayText
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx(Likes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, post.likes, " likes"))));
}

const Author = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    font-style:italic;
`;
const Likes = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    font-style:italic;
    text-align:center;
`;
const CardStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .body{
        padding: 20px;

        h3{
            margin-bottom: 20px;
        }

        p{
            color: #666666;
            line-height: 1.5;
        }
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (SingleCard);

/***/ }),

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\nuri\\Desktop\\development\\context\\UserContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return __jsx(UserContext.Provider, {
    value: {
      user,
      setUser
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, children);
});

/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reflexbox */ "reflexbox");
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SingleCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SingleCard */ "./components/SingleCard.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.js");
var _jsxFileName = "C:\\Users\\nuri\\Desktop\\development\\pages\\posts\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Post = ({
  post
}) => {
  const {
    user,
    setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_7__["UserContext"]);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleDelete = async () => {
    const {
      API_URL
    } = process.env;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`${API_URL}/posts/${post.id}`, {
      headers: {
        'Authorization': `Bearer ${user.jwt}`
      }
    }).then(response => {
      setError('Post deleted. You might need to refresh the page');
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.back();
    }).catch(error => {
      setError('This is not your post');
    });
  };

  return __jsx(reflexbox__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    variant: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(reflexbox__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    width: {
      _: "100%",
      md: "80%"
    },
    variant: "post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_components_SingleCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), user && __jsx(ButtonStyled, {
    onClick: handleDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Delete"), error && __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 27
    }
  }, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 55
    }
  }), error)));
};

const ButtonStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default.a.button`
    border: 1px solid red;
    color: red;
    height: 30px;
    width: 70px;
    font-weight: bold;
    margin: 20px 0 0 50px;
`;
async function getStaticPaths() {
  const {
    API_URL
  } = process.env;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${API_URL}/posts/`);
  const posts = await res.json();
  const paths = posts.map(post => ({
    params: {
      id: post.id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const {
    API_URL
  } = process.env;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${API_URL}/posts/${params.id}`);
  const post = await res.json();
  return {
    props: {
      post
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/posts/[id].js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nuri\Desktop\development\pages\posts\[id].js */"./pages/posts/[id].js");


/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reflexbox":
/*!****************************!*\
  !*** external "reflexbox" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflexbox");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW5nbGVDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxleGJveFwiIl0sIm5hbWVzIjpbIlNpbmdsZUNhcmQiLCJwb3N0IiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJkYXRlIiwidXBkYXRlZF9hdCIsImRpc3BsYXlUZXh0IiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIiwicG9zdF90aXRsZSIsInN1YnN0cmluZyIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ1c2VyIiwidXNlcm5hbWUiLCJmb250U2l6ZSIsIl9faHRtbCIsImxpa2VzIiwiQXV0aG9yIiwic3R5bGVkIiwicCIsIkxpa2VzIiwiQ2FyZFN0eWxlZCIsImRpdiIsIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2V0VXNlciIsInVzZVN0YXRlIiwiUG9zdCIsInVzZUNvbnRleHQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlRGVsZXRlIiwiYXhpb3MiLCJkZWxldGUiLCJpZCIsImhlYWRlcnMiLCJqd3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJSb3V0ZXIiLCJiYWNrIiwiY2F0Y2giLCJfIiwibWQiLCJCdXR0b25TdHlsZWQiLCJidXR0b24iLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwicG9zdHMiLCJqc29uIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLFNBQVNBLFVBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUE4QjtBQUMxQixRQUFNO0FBQUVDO0FBQUYsTUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUNBLFFBQU1DLElBQUksR0FBR0osSUFBSSxDQUFDSyxVQUFsQjtBQUNBLFFBQU1DLFdBQVcsR0FBR04sSUFBSSxDQUFDTyxXQUFMLENBQWlCQyxPQUFqQixDQUF5QixLQUF6QixFQUFnQyxRQUFoQyxDQUFwQjtBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LEtBQVc7QUFDL0J1RCxVQUFNLEVBQUU7QUFBRW5CLFFBQUUsRUFBRXBDLElBQUksQ0FBQ29DLEVBQUwsQ0FBUW9CLFFBQVI7QUFBTjtBQUR1QixHQUFYLENBQVYsQ0FBZDtBQUlBLFNBQU07QUFBRUgsU0FBRjtBQUFTSSxZQUFRLEVBQUU7QUFBbkIsR0FBTjtBQUNIO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFSDtBQUFGLENBQTlCLEVBQXlDO0FBQzVDLFFBQU07QUFBRXREO0FBQUYsTUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUNBLFFBQU04QyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBRSxHQUFFakQsT0FBUSxVQUFTc0QsTUFBTSxDQUFDbkIsRUFBRyxFQUEvQixDQUF2QjtBQUNBLFFBQU1wQyxJQUFJLEdBQUcsTUFBTWlELEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUVBLFNBQU87QUFBRU8sU0FBSyxFQUFFO0FBQUUzRDtBQUFGO0FBQVQsR0FBUDtBQUNIO0FBRWM2QixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmZ1bmN0aW9uIFNpbmdsZUNhcmQgKHsgcG9zdCB9KXtcclxuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcbiAgICBjb25zdCBkYXRlID0gcG9zdC51cGRhdGVkX2F0O1xyXG4gICAgY29uc3QgZGlzcGxheVRleHQgPSBwb3N0LmRlc2NyaXB0aW9uLnJlcGxhY2UoL1xcbi9nLCBcIjxiciAvPlwiKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZFN0eWxlZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnsgcG9zdC5wb3N0X3RpdGxlIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRob3I+bGFzdCB1cGRhdGVkIHtkYXRlLnN1YnN0cmluZygwLDEwKX0gYnkgPGZvbnQgc3R5bGUgPSB7e2NvbG9yOlwiYmxhY2tcIiwgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJ9fT57cG9zdC51c2VyLnVzZXJuYW1lfTwvZm9udD48L0F1dGhvcj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3tjb2xvcjpcImJsYWNrXCIsIGZvbnRTaXplOiBcIjEuNWVtXCJ9fSBkYW5nZXJvdXNseVNldElubmVySFRNTCA9IHt7IF9faHRtbDogZGlzcGxheVRleHQgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlrZXM+e3Bvc3QubGlrZXN9IGxpa2VzPC9MaWtlcz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmRTdHlsZWQ+IFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5jb25zdCBBdXRob3IgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG5gXHJcblxyXG5jb25zdCBMaWtlcyA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuYFxyXG5jb25zdCBDYXJkU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAuYm9keXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDYXJkIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3VzZXIsIHNldFVzZXJ9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmVmbGV4Ym94J1xyXG5pbXBvcnQgU2luZ2xlQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpbmdsZUNhcmQnXHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7IFxyXG4gICAgY29uc3QgIHsgdXNlciwgc2V0VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoYCR7QVBJX1VSTH0vcG9zdHMvJHtwb3N0LmlkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt1c2VyLmp3dH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ1Bvc3QgZGVsZXRlZC4gWW91IG1pZ2h0IG5lZWQgdG8gcmVmcmVzaCB0aGUgcGFnZScpXHJcbiAgICAgICAgICAgIFJvdXRlci5iYWNrKClcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdUaGlzIGlzIG5vdCB5b3VyIHBvc3QnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHZhcmlhbnQgPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoID0ge3tfOiBcIjEwMCVcIiwgbWQ6IFwiODAlXCJ9fSB2YXJpYW50ID0gXCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlQ2FyZCBwb3N0ID0ge3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlciAmJlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblN0eWxlZCBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PkRlbGV0ZTwvQnV0dG9uU3R5bGVkPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8aDIgc3R5bGUgPSB7e2NvbG9yOidyZWQnfX0+PGJyLz57ZXJyb3J9PC9oMj59XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZWQgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDUwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcG9zdHMvYCk7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBwb3N0LmlkLnRvU3RyaW5nKCkgfVxyXG4gICAgfSkpXHJcblxyXG4gICAgcmV0dXJueyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pe1xyXG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Bvc3RzLyR7cGFyYW1zLmlkfWApO1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdCB9IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGV4Ym94XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=