
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.sageDemoTest = sageDemoTest;
exports.runTestWatcher = runTestWatcher;

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(113);

var _assign2 = _interopRequireDefault(_assign);

var _effects = __webpack_require__(551);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runTestWatcher, runTestWorker].map(_regenerator2.default.mark);

// ACTION TYPES
var SAGA_DEMO = 'nextjs/app/SAGA_DEMO';
var SAGA_DEMO_SUCCESS = 'nextjs/app/SAGA_DEMO_SUCCESS';

var initialState = {
  saga_demo: {
    id: 10

    // REDUCER
  } };function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SAGA_DEMO:
      return (0, _assign2.default)({}, state, {
        saga_demo: {
          id: action.id
        }
      });
    case SAGA_DEMO_SUCCESS:
      console.log('saga demo success');
      return state;
    default:
      return state;
  }
}

// ACTIONS
function sageDemoTest(id) {
  return {
    type: SAGA_DEMO,
    id: id
  };
}

// SAGA
function runTestWatcher() {
  return _regenerator2.default.wrap(function runTestWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeLatest)(SAGA_DEMO, runTestWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function runTestWorker() {
  return _regenerator2.default.wrap(function runTestWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.put)({
            type: SAGA_DEMO_SUCCESS
          });

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/app.js"); } } })();

/***/ }),

/***/ 552:
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

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(547);

var _reduxDevtoolsExtension = __webpack_require__(578);

var _nextReduxWrapper = __webpack_require__(546);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(579);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(556);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _saga = __webpack_require__(580);

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = __webpack_require__(581).default;

var sagaMiddleware = (0, _reduxSaga2.default)();

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));

  store.sagaTask = sagaMiddleware.run(_saga2.default);
  return store;
};

function withReduxSaga(BaseComponent) {
  return (0, _nextReduxWrapper2.default)(initStore)((0, _nextReduxSaga2.default)(BaseComponent));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/store.js"); } } })();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(558);


/***/ }),

/***/ 558:
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

var _nextReduxWrapper = __webpack_require__(546);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _layout = __webpack_require__(566);

var _app = __webpack_require__(550);

var _auth = __webpack_require__(552);

var _hocs = __webpack_require__(572);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/index.js?entry';

var App = (_dec = (0, _hocs.page)(), _dec2 = (0, _hocs.connect)(null, { sageDemoTest: _app.sageDemoTest }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.sageDemoTest(20);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_layout.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Home'), _react2.default.createElement('button', { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Call saga'));
    }
  }]);

  return App;
}(_react.Component), _class2.propTypes = {}, _temp2)) || _class) || _class);
exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Header = undefined;

var _Header2 = __webpack_require__(567);

var _Header3 = _interopRequireDefault(_Header2);

var _Button2 = __webpack_require__(571);

var _Button3 = _interopRequireDefault(_Button2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Header = _Header3.default;
exports.Button = _Button3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/index.js"); } } })();

/***/ }),

/***/ 567:
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

var _link = __webpack_require__(568);

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
      }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'Home')), ' ', _react2.default.createElement(_link2.default, { href: '/about?id=10', as: '/about/10', prefetch: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'About')));
    }
  }]);

  return Header;
}(_react.Component), _class.propTypes = {}, _temp);
exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); } } })();

/***/ }),

/***/ 571:
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
exports.connect = exports.page = undefined;

var _Page = __webpack_require__(573);

var _Page2 = _interopRequireDefault(_Page);

var _Connect = __webpack_require__(582);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.page = _Page2.default;
exports.connect = _Connect2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/services/hocs/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/services/hocs/index.js"); } } })();

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

var _nextReduxWrapper = __webpack_require__(546);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _lodash = __webpack_require__(574);

var _fetch = __webpack_require__(575);

var _auth = __webpack_require__(552);

var _store = __webpack_require__(555);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/services/hocs/Page/Page.js';


function decorator() {
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
              lineNumber: 35
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
                    return (0, _fetch.fetch)('/loadAuth', {
                      self: true
                    });

                  case 4:
                    res = _context.sent;
                    _context.prev = 5;
                    _context.next = 8;
                    return res.json();

                  case 8:
                    json = _context.sent;

                    store.dispatch((0, _auth.loadUser)(json));
                    _context.next = 14;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](5);

                  case 14:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this, [[5, 12]]);
          }));

          function getInitialProps(_x) {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/services/hocs/Page/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/services/hocs/Page/Page.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;

var _isomorphicFetch = __webpack_require__(576);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const ip = require('ip')

var dev = "development" !== 'production';

function fetch(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isServer = typeof window === 'undefined';

  if (!isServer && opts.self) {
    return;
  }

  var protocol = opts.self ? 'http://' : 'https://';
  var apiUrl = opts.self ? 'localhost' : 'API_URL';

  if (!dev && opts.self) {
    protocol = 'https://';
  }

  if (isServer && opts.self) {
    protocol = 'http://';
  }

  return (0, _isomorphicFetch2.default)('' + protocol + apiUrl + ':' + "3000" + url);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/utils/fetch.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/utils/fetch.js"); } } })();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = __webpack_require__(74);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(551);

var _app = __webpack_require__(550);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [rootSaga].map(_regenerator2.default.mark);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.call)(_app.runTestWatcher)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/saga.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/saga.js"); } } })();

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(547);

var _app = __webpack_require__(550);

var _app2 = _interopRequireDefault(_app);

var _auth = __webpack_require__(552);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  app: _app2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); } } })();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _nextReduxWrapper = __webpack_require__(546);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(555);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/services/hocs/Connect/Connect.js';


function decorator(stateToProps, dispatchToProps) {
  return function (ComposedComponent) {
    var _dec, _class;

    var Connect = (_dec = (0, _nextReduxWrapper2.default)(_store.initStore, stateToProps, dispatchToProps), _dec(_class = function (_Component) {
      (0, _inherits3.default)(Connect, _Component);

      function Connect() {
        (0, _classCallCheck3.default)(this, Connect);

        return (0, _possibleConstructorReturn3.default)(this, (Connect.__proto__ || (0, _getPrototypeOf2.default)(Connect)).apply(this, arguments));
      }

      (0, _createClass3.default)(Connect, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }));
        }
      }]);

      return Connect;
    }(_react.Component)) || _class);

    return Connect;
  };
}

exports.default = decorator;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/services/hocs/Connect/Connect.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/services/hocs/Connect/Connect.js"); } } })();

/***/ })

},[557]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L21vZHVsZXMvYXBwLmpzP2NjYzRkMmEiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzP2NjYzRkMmEiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanM/Y2NjNGQyYSIsIndlYnBhY2s6Ly8vLi9wYWdlcz9jY2M0ZDJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzP2NjYzRkMmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci5qcz9jY2M0ZDJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0J1dHRvbi9CdXR0b24uanM/Y2NjNGQyYSIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9ob2NzL2luZGV4LmpzP2NjYzRkMmEiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaG9jcy9QYWdlL1BhZ2UuanM/Y2NjNGQyYSIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaC5qcz9jY2M0ZDJhIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2EuanM/Y2NjNGQyYSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzP2NjYzRkMmEiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaG9jcy9Db25uZWN0L0Nvbm5lY3QuanM/Y2NjNGQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuLy8gQUNUSU9OIFRZUEVTXG5jb25zdCBTQUdBX0RFTU8gPSAnbmV4dGpzL2FwcC9TQUdBX0RFTU8nXG5jb25zdCBTQUdBX0RFTU9fU1VDQ0VTUyA9ICduZXh0anMvYXBwL1NBR0FfREVNT19TVUNDRVNTJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNhZ2FfZGVtbzoge1xuICAgIGlkOiAxMFxuICB9XG59XG5cbi8vIFJFRFVDRVJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNBR0FfREVNTzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzYWdhX2RlbW86IHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSBTQUdBX0RFTU9fU1VDQ0VTUzpcbiAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGRlbW8gc3VjY2VzcycpXG4gICAgICByZXR1cm4gc3RhdGVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VEZW1vVGVzdChpZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNBR0FfREVNTyxcbiAgICBpZFxuICB9XG59XG5cbi8vIFNBR0FcbmV4cG9ydCBmdW5jdGlvbiogcnVuVGVzdFdhdGNoZXIoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0FHQV9ERU1PLCBydW5UZXN0V29ya2VyKVxufVxuXG5mdW5jdGlvbiogcnVuVGVzdFdvcmtlcigpIHtcbiAgeWllbGQgcHV0KHtcbiAgICB0eXBlOiBTQUdBX0RFTU9fU1VDQ0VTU1xuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hcHAuanMiLCJjb25zdCBMT0FEX1VTRVIgPSAnbmV4dGpzL2FwcC9MT0FEX1VTRVInXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHVzZXI6IGFjdGlvbi51c2VyXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXIodXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPQURfVVNFUixcbiAgICB1c2VyXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L21vZHVsZXMvYXV0aC5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCBuZXh0UmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhJ1xuY29uc3QgcmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcicpLmRlZmF1bHRcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpXG4gIClcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVkdXhTYWdhKEJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHdpdGhSZWR1eChpbml0U3RvcmUpKG5leHRSZWR1eFNhZ2EoQmFzZUNvbXBvbmVudCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IHNhZ2VEZW1vVGVzdCB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXBwJ1xuaW1wb3J0IHsgbG9hZFVzZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2F1dGgnXG5pbXBvcnQgeyBwYWdlLCBjb25uZWN0IH0gZnJvbSAnc2VydmljZXMvaG9jcydcblxuQHBhZ2UoKVxuQGNvbm5lY3QobnVsbCwgeyBzYWdlRGVtb1Rlc3QgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2FnZURlbW9UZXN0KDIwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DYWxsIHNhZ2E8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJleHBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcidcbmV4cG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dD9pZD0xMFwiIGFzPVwiL2Fib3V0LzEwXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8YnV0dG9uPkJ1dHRvbjwvYnV0dG9uPlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9CdXR0b24vQnV0dG9uLmpzIiwiZXhwb3J0IHBhZ2UgZnJvbSAnLi9QYWdlL1BhZ2UnXG5leHBvcnQgY29ubmVjdCBmcm9tICcuL0Nvbm5lY3QvQ29ubmVjdCdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL2hvY3MvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAndXRpbHMvZmV0Y2gnXG5cbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hdXRoJ1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAncmVkdXgvc3RvcmUnXG5cbmZ1bmN0aW9uIGRlY29yYXRvcigpIHtcbiAgcmV0dXJuIENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgICBAd2l0aFJlZHV4KFxuICAgICAgaW5pdFN0b3JlLFxuICAgICAgKHsgYXV0aCB9KSA9PiAoe1xuICAgICAgICB1c2VyOiBhdXRoLnVzZXJcbiAgICAgIH0pLFxuICAgICAgeyBsb2FkVXNlciB9XG4gICAgKVxuICAgIGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHN0b3JlIH0pIHtcbiAgICAgICAgaWYgKGdldChzdG9yZS5nZXRTdGF0ZSgpLCAnYXV0aC51c2VyLmlkJykpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvbG9hZEF1dGgnLCB7XG4gICAgICAgICAgc2VsZjogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChsb2FkVXNlcihqc29uKSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFBhZ2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0b3JcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL2hvY3MvUGFnZS9QYWdlLmpzIiwiaW1wb3J0IGdldCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuLy8gY29uc3QgaXAgPSByZXF1aXJlKCdpcCcpXG5cbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuICBpZiAoIWlzU2VydmVyICYmIG9wdHMuc2VsZikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHByb3RvY29sID0gb3B0cy5zZWxmID8gJ2h0dHA6Ly8nIDogJ2h0dHBzOi8vJ1xuICBjb25zdCBhcGlVcmwgPSBvcHRzLnNlbGYgPyAnbG9jYWxob3N0JyA6ICdBUElfVVJMJ1xuXG4gIGlmICghZGV2ICYmIG9wdHMuc2VsZikge1xuICAgIHByb3RvY29sID0gJ2h0dHBzOi8vJ1xuICB9XG5cbiAgaWYgKGlzU2VydmVyICYmIG9wdHMuc2VsZikge1xuICAgIHByb3RvY29sID0gJ2h0dHA6Ly8nXG4gIH1cblxuICByZXR1cm4gZ2V0KGAke3Byb3RvY29sfSR7YXBpVXJsfToke3Byb2Nlc3MuZW52LlBPUlR9JHt1cmx9YClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2ZldGNoLmpzIiwiaW1wb3J0IHsgYWxsLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQgeyBydW5UZXN0V2F0Y2hlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbY2FsbChydW5UZXN0V2F0Y2hlcildKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc2FnYS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vbW9kdWxlcy9hcHAnXG5pbXBvcnQgYXV0aCBmcm9tICcuL21vZHVsZXMvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgYXBwXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gZGVjb3JhdG9yKHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChpbml0U3RvcmUsIHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKVxuICAgIGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29ubmVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvaG9jcy9Db25uZWN0L0Nvbm5lY3QuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBOEJBO0FBUUE7QUFDQTs7Ozs7Ozs7O0FBdkNBO0FBQ0E7OztBQXFDQTtBQUNBO0FBckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUFBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7Ozs7O0FBbEJBO0FBQ0E7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQTtBQUNBO0FBdkJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFmQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFWQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUlBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBSkE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBTEE7O0FBQ0E7QUFBQTtBQUhBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQXlCQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBZEE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFEQTtBQW5CQTtBQUNBO0FBbUJBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQW9CQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFOQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFHQTtBQUNBOzs7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7QUFDQTtBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUFJQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        