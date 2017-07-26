
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(547);

var _layout = __webpack_require__(564);

var _helpers = __webpack_require__(572);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/about/index.js?entry';

var About = (_dec = (0, _helpers.page)(), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_layout.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), 'About ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), (0, _lodash.get)(this.props, 'url.query.id'));
    }
  }]);

  return About;
}(_react.Component), _class2.propTypes = {}, _temp)) || _class);
exports.default = About;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/pages/about/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/pages/about/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(543);

var _reduxDevtoolsExtension = __webpack_require__(557);

var _reduxThunk = __webpack_require__(558);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = __webpack_require__(559).default;

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/store.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(543);

var _app = __webpack_require__(560);

var _app2 = _interopRequireDefault(_app);

var _auth = __webpack_require__(561);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  app: _app2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.test = test;

var _assign = __webpack_require__(113);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEST = 'nextjs/app/TEST';

var initialState = {
  test: {
    id: 10
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TEST:
      return (0, _assign2.default)({}, state, {
        test: {
          id: action.id
        }
      });
    default:
      return state;
  }
}

function test(id) {
  return {
    type: TEST,
    id: id
  };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/app.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.loadUser = loadUser;

var _assign = __webpack_require__(113);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_USER = 'nextjs/app/LOAD_USER';

var initialState = {
  user: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LOAD_USER:
      return (0, _assign2.default)({}, state, {
        user: action.user
      });
    default:
      return state;
  }
}

function loadUser(user) {
  return {
    type: LOAD_USER,
    user: user
  };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Header = undefined;

var _Header2 = __webpack_require__(565);

var _Header3 = _interopRequireDefault(_Header2);

var _Button2 = __webpack_require__(569);

var _Button3 = _interopRequireDefault(_Button2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Header = _Header3.default;
exports.Button = _Button3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/index.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(566);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js';

var Header = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_link2.default, { href: '/about?id=10', as: '/about/10', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'About')), _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Home')));
    }
  }]);

  return Header;
}(_react.Component), _class.propTypes = {}, _temp);
exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js';

var Button = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);

    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, 'Button');
    }
  }]);

  return Button;
}(_react.Component), _class.propTypes = {}, _temp);
exports.default = Button;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = undefined;

var _Page = __webpack_require__(573);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.page = _Page2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/services/helpers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/services/helpers/index.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(75);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(548);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _lodash = __webpack_require__(547);

var _auth = __webpack_require__(561);

var _store = __webpack_require__(556);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/services/helpers/Page/Page.js';


function decorator() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (ComposedComponent) {
    var _dec, _class;

    var Page = (_dec = (0, _nextReduxWrapper2.default)(_store.initStore, function (_ref) {
      var auth = _ref.auth;
      return {
        user: auth.user
      };
    }, { loadUser: _auth.loadUser }), _dec(_class = function (_Component) {
      (0, _inherits3.default)(Page, _Component);

      function Page() {
        (0, _classCallCheck3.default)(this, Page);

        return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
      }

      (0, _createClass3.default)(Page, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }));
        }
      }], [{
        key: 'getInitialProps',
        value: function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
            var store = _ref3.store;
            var res, json;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(0, _lodash.get)(store.getState(), 'auth.user.id')) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt('return');

                  case 2:
                    _context.next = 4;
                    return fetch('http://localhost:3000/loadAuth');

                  case 4:
                    res = _context.sent;
                    _context.next = 7;
                    return res.json();

                  case 7:
                    json = _context.sent;

                    store.dispatch((0, _auth.loadUser)(json));

                  case 9:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x2) {
            return _ref2.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return Page;
    }(_react.Component)) || _class);

    return Page;
  };
}

exports.default = decorator;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/services/helpers/Page/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/services/helpers/Page/Page.js"); } } })();

/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hYm91dC9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0PzZmYWE5OGIiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanM/NmZhYTk4YiIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzPzZmYWE5OGIiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hcHAuanM/NmZhYTk4YiIsIndlYnBhY2s6Ly8vLi9yZWR1eC9tb2R1bGVzL2F1dGguanM/NmZhYTk4YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcz82ZmFhOThiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanM/NmZhYTk4YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9CdXR0b24vQnV0dG9uLmpzPzZmYWE5OGIiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaGVscGVycy9pbmRleC5qcz82ZmFhOThiIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2hlbHBlcnMvUGFnZS9QYWdlLmpzPzZmYWE5OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSAnc2VydmljZXMvaGVscGVycydcblxuQHBhZ2UoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgQWJvdXQgPGJyIC8+XG4gICAgICAgIHtnZXQodGhpcy5wcm9wcywgJ3VybC5xdWVyeS5pZCcpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hYm91dD9lbnRyeSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VyJykuZGVmYXVsdFxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vbW9kdWxlcy9hcHAnXG5pbXBvcnQgYXV0aCBmcm9tICcuL21vZHVsZXMvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgYXBwXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvcmVkdWNlci5qcyIsImNvbnN0IFRFU1QgPSAnbmV4dGpzL2FwcC9URVNUJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRlc3Q6IHtcbiAgICBpZDogMTBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBURVNUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHRlc3Q6IHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0KGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVEVTVCxcbiAgICBpZFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9tb2R1bGVzL2FwcC5qcyIsImNvbnN0IExPQURfVVNFUiA9ICduZXh0anMvYXBwL0xPQURfVVNFUidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcih1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9BRF9VU0VSLFxuICAgIHVzZXJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzIiwiZXhwb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9IZWFkZXInXG5leHBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uL0J1dHRvbidcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQ/aWQ9MTBcIiBhcz1cIi9hYm91dC8xMFwiIHByZWZldGNoPlxuICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxidXR0b24+QnV0dG9uPC9idXR0b24+XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0J1dHRvbi9CdXR0b24uanMiLCJleHBvcnQgcGFnZSBmcm9tICcuL1BhZ2UvUGFnZSdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL2hlbHBlcnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgbG9hZFVzZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2F1dGgnXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gZGVjb3JhdG9yKGNvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChcbiAgICAgIGluaXRTdG9yZSxcbiAgICAgICh7IGF1dGggfSkgPT4gKHtcbiAgICAgICAgdXNlcjogYXV0aC51c2VyXG4gICAgICB9KSxcbiAgICAgIHsgbG9hZFVzZXIgfVxuICAgIClcbiAgICBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSB9KSB7XG4gICAgICAgIGlmIChnZXQoc3RvcmUuZ2V0U3RhdGUoKSwgJ2F1dGgudXNlci5pZCcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvYWRBdXRoJylcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICBzdG9yZS5kaXNwYXRjaChsb2FkVXNlcihqc29uKSlcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUGFnZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvaGVscGVycy9QYWdlL1BhZ2UuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBUEE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7QUFDQTtBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDY0E7QUFDQTs7Ozs7OztBQXRCQTtBQUNBO0FBQ0E7O0FBTUE7QUFKQTtBQURBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTs7QUFFQTtBQUFBO0FBREE7QUFLQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7Ozs7OztBQWxCQTtBQUNBO0FBQ0E7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFWQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUlBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBSkE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBTEE7O0FBQ0E7QUFBQTtBQUhBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQXFCQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQUFBO0FBZUE7QUFDQTtBQURBO0FBZkE7QUFDQTtBQWdCQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        