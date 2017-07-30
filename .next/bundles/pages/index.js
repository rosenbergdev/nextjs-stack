
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authReducer = __webpack_require__(597);

Object.keys(_authReducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _authReducer[key];
    }
  });
});

var _authSagas = __webpack_require__(599);

Object.keys(_authSagas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _authSagas[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth/index.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.sageDemoTest = sageDemoTest;
exports.runTestWatchers = runTestWatchers;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(115);

var _assign2 = _interopRequireDefault(_assign);

var _effects = __webpack_require__(579);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runTestWorker, runTestWatchers].map(_regenerator2.default.mark);

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
function runTestWorker() {
  return _regenerator2.default.wrap(function runTestWorker$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.put)({
            type: SAGA_DEMO_SUCCESS
          });

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function runTestWatchers() {
  return _regenerator2.default.wrap(function runTestWatchers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(SAGA_DEMO, runTestWorker);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/app.js"); } } })();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = exports.Title = exports.Button = exports.Header = exports.Container = undefined;

var _Container2 = __webpack_require__(633);

var _Container3 = _interopRequireDefault(_Container2);

var _Header2 = __webpack_require__(634);

var _Header3 = _interopRequireDefault(_Header2);

var _Button2 = __webpack_require__(660);

var _Button3 = _interopRequireDefault(_Button2);

var _Title2 = __webpack_require__(661);

var _Title3 = _interopRequireDefault(_Title2);

var _List2 = __webpack_require__(662);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(663);

var _ListItem3 = _interopRequireDefault(_ListItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Container = _Container3.default;
exports.Header = _Header3.default;
exports.Button = _Button3.default;
exports.Title = _Title3.default;
exports.List = _List3.default;
exports.ListItem = _ListItem3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/index.js"); } } })();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _extends2 = __webpack_require__(77);

var _extends3 = _interopRequireDefault(_extends2);

var _authTypes = __webpack_require__(598);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loading: false,
  loaded: false,
  user: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _authTypes.LOAD_USER:
      return (0, _extends3.default)({}, state, {
        loading: true,
        loaded: false
      });
    case _authTypes.LOAD_USER_SUCCESS:
      return {
        loading: false,
        loaded: true,
        user: (0, _extends3.default)({}, action.user)
      };
    case _authTypes.SAVE_USER:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _authTypes.SAVE_USER_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: Boolean(action.user.name),
        user: action.user
      });
    case _authTypes.LOGOUT_USER:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _authTypes.LOGOUT_USER_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        user: {}
      });
    default:
      return state;
  }
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth/auth-reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth/auth-reducer.js"); } } })();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD_USER = exports.LOAD_USER = 'nextjs/app/LOAD_USER';
var LOAD_USER_SUCCESS = exports.LOAD_USER_SUCCESS = 'nextjs/app/LOAD_USER_SUCCESS';

var SAVE_USER = exports.SAVE_USER = 'nextjs/app/SAVE_USER';
var SAVE_USER_SUCCESS = exports.SAVE_USER_SUCCESS = 'nextjs/app/SAVE_USER_SUCCESS';

var LOGOUT_USER = exports.LOGOUT_USER = 'nextjs/app/LOGOUT_USER';
var LOGOUT_USER_SUCCESS = exports.LOGOUT_USER_SUCCESS = 'nextjs/app/LOGOUT_USER_SUCCESS';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth/auth-types.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth/auth-types.js"); } } })();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUser = loadUser;
exports.saveUser = saveUser;
exports.logout = logout;
exports.runLoadUserWatchers = runLoadUserWatchers;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(579);

var _index = __webpack_require__(73);

var _index2 = _interopRequireDefault(_index);

var _api = __webpack_require__(602);

var _api2 = _interopRequireDefault(_api);

var _authTypes = __webpack_require__(598);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runLoadUserWorker, runSaveUserWorker, runLogoutUserWorker, runLoadUserWatchers].map(_regenerator2.default.mark);

function loadUser(user) {
  return {
    type: _authTypes.LOAD_USER,
    user: user
  };
}

function saveUser(user) {
  return {
    type: _authTypes.SAVE_USER,
    user: user
  };
}

function logout() {
  return {
    type: _authTypes.LOGOUT_USER
  };
}

// SAGAS
function runLoadUserWorker(action) {
  return _regenerator2.default.wrap(function runLoadUserWorker$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)({
            type: _authTypes.LOAD_USER_SUCCESS,
            user: action.user
          });

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context['catch'](0);

          console.warn('error', _context.t0);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 5]]);
}

function runSaveUserWorker(action) {
  var res;
  return _regenerator2.default.wrap(function runSaveUserWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_api2.default, '/save-user', {
            method: 'post',
            data: action.user
          });

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)({
            type: _authTypes.SAVE_USER_SUCCESS,
            user: res.data
          });

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);

          console.warn('error', _context2.t0);

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 8]]);
}

function runLogoutUserWorker() {
  return _regenerator2.default.wrap(function runLogoutUserWorker$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_api2.default, '/logout', {
            method: 'post'
          });

        case 3:

          _index2.default.push('/');

          _context3.next = 6;
          return (0, _effects.put)({
            type: _authTypes.LOGOUT_USER_SUCCESS
          });

        case 6:
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);

          console.warn('error', _context3.t0);

        case 11:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 8]]);
}

function runLoadUserWatchers() {
  return _regenerator2.default.wrap(function runLoadUserWatchers$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.all)([(0, _effects.takeLatest)(_authTypes.LOAD_USER, runLoadUserWorker), (0, _effects.takeLatest)(_authTypes.SAVE_USER, runSaveUserWorker), (0, _effects.takeLatest)(_authTypes.LOGOUT_USER, runLogoutUserWorker)]);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth/auth-sagas.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth/auth-sagas.js"); } } })();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = api;

var _axios = __webpack_require__(640);

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = __webpack_require__(659);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function api(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    isomorphic: false,
    method: 'get',
    data: undefined
  };

  var isServer = typeof window === 'undefined';
  var method = opts.method || 'get';
  var protocol = isServer ? 'http://' : 'https://';
  var headers = {};
  var cookie = isServer && opts.req.get('cookie');
  var port = '';

  if (url.indexOf('api/') === 0) {
    // always https
    return '';
  }

  if (_appConfig2.default.dev) {
    protocol = 'http://';
    port = _appConfig2.default.port;
  }

  var apiUrl = '' + protocol + _appConfig2.default.host + ':' + port + url;

  if (cookie) {
    headers = { Cookie: cookie };
  }

  return (0, _axios2.default)(apiUrl, {
    method: method,
    data: opts.data,
    withCredentials: true,
    headers: headers
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/utils/api.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/utils/api.js"); } } })();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(570);

var _reduxDevtoolsExtension = __webpack_require__(669);

var _nextReduxWrapper = __webpack_require__(589);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(670);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(609);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _saga = __webpack_require__(671);

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = __webpack_require__(672).default;

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

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(611);


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(227);

var _head2 = _interopRequireDefault(_head);

var _propTypes = __webpack_require__(50);

var _reactRedux = __webpack_require__(567);

var _reduxForm = __webpack_require__(581);

var _gridStyled = __webpack_require__(584);

var _layout = __webpack_require__(596);

var _fields = __webpack_require__(664);

var _app = __webpack_require__(588);

var _auth = __webpack_require__(586);

var _hocs = __webpack_require__(666);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _dec3,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/index.js?entry';

var App = (_dec = (0, _hocs.page)(), _dec2 = (0, _reactRedux.connect)(function (_ref) {
  var auth = _ref.auth;
  return {
    user: auth.user
  };
}, { sageDemoTest: _app.sageDemoTest, saveUser: _auth.saveUser }), _dec3 = (0, _reduxForm.reduxForm)({
  form: 'test'
}), _dec(_class = _dec2(_class = _dec3(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.sageDemoTest(20);
    }, _this.handleSaveUser = function (fields) {
      _this.props.saveUser(fields);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;

      return _react2.default.createElement(_layout.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Home page')), _react2.default.createElement(_layout.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Home page'), _react2.default.createElement(_layout.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Home'), _react2.default.createElement(_gridStyled.Box, { mb: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_layout.Button, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Call saga demo watcher')), _react2.default.createElement(_gridStyled.Box, { mb: 10, mt: 30, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Name stored in redis: ', _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.props.user.name)), _react2.default.createElement(_gridStyled.Box, { mb: 10, mt: 30, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('form', { onSubmit: handleSubmit(this.handleSaveUser), __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_fields.Input, { name: 'name', label: 'Username', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_layout.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Save user to Redis'))));
    }
  }]);

  return App;
}(_react.Component), _class2.propTypes = {
  sageDemoTest: _propTypes.PropTypes.func.isRequired,
  handleSubmit: _propTypes.PropTypes.func.isRequired,
  user: _propTypes.PropTypes.object,
  saveUser: _propTypes.PropTypes.func.isRequired
}, _class2.defaultProps = {
  user: {}
}, _temp2)) || _class) || _class) || _class);
exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(72)
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

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = __webpack_require__(584);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = (0, _styledComponents2.default)(_gridStyled.Box).withConfig({
  displayName: 'Container__Container',
  componentId: 'ewafzr-0'
})(['max-width:1024px;margin-left:auto;margin-right:auto;']);

exports.default = Container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); } } })();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(635);

var _link2 = _interopRequireDefault(_link);

var _gridStyled = __webpack_require__(584);

var _misc = __webpack_require__(638);

var _ = __webpack_require__(596);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js';


var Header = function Header() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_gridStyled.Grid, { width: 1 / 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_.List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_.ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Home'))), _react2.default.createElement(_.ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_link2.default, { href: '/about?id=10', as: '/about/10', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'About'))), _react2.default.createElement(_.ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_link2.default, { href: '/secret', as: '/secret', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Restricted page'))))), _react2.default.createElement(_gridStyled.Grid, { width: 1 / 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_misc.Logout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); } } })();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = undefined;

var _Logout2 = __webpack_require__(639);

var _Logout3 = _interopRequireDefault(_Logout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Logout = _Logout3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/containers/misc/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/containers/misc/index.js"); } } })();

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(567);

var _auth = __webpack_require__(586);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/containers/misc/Logout/Logout.js';
// import { PropTypes } from 'prop-types'
// import { get } from 'lodash'


var Logout = (_dec = (0, _reactRedux.connect)(null, { logout: _auth.logout }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Logout, _Component);

  function Logout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Logout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Logout.__proto__ || (0, _getPrototypeOf2.default)(Logout)).call.apply(_ref, [this].concat(args))), _this), _this.handleLogout = function () {
      _this.props.logout();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Logout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { onClick: this.handleLogout, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'Logout');
    }
  }]);

  return Logout;
}(_react.Component), _class2.propTypes = {}, _temp2)) || _class);
exports.default = Logout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/containers/misc/Logout/Logout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/containers/misc/Logout/Logout.js"); } } })();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const ip = require('ip')
var isServer = typeof window === 'undefined';

var config = {
  // host: process.env.NODE_ENV !== 'production' ? 'localhost' : ip.address(),
  host: isServer ? 'localhost' : document.domain,
  port: "3000" || 3000,
  dev: "development" !== 'production'
};

module.exports = config;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/appConfig.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/appConfig.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(50);

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js';


var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      type = _ref.type;
  return _react2.default.createElement('button', { type: type, className: className, onClick: onClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, children);
};

Button.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  type: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  className: _propTypes.PropTypes.string
};

Button.defaultProps = {
  className: '',
  type: 'submit',
  onClick: undefined
};

var StyledButton = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'Button__StyledButton',
  componentId: 'dmywqh-0'
})(['background:#337ab7;background:', ';border:1px solid #2e6da4;box-shadow:none;color:#fff;padding:6px 12px;cursor:pointer;'], function (props) {
  return props.secondary && '#5cb85c';
});

exports.default = StyledButton;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js"); } } })();

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(50);

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/layout/Title/Title.js';


var Title = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement('h1', { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, children);
};

Title.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string
};

Title.defaultProps = {
  className: ''
};

var StyledTitle = (0, _styledComponents2.default)(Title).withConfig({
  displayName: 'Title__StyledTitle',
  componentId: 's1ly0wcd-0'
})(['font-size:1.4em;text-align:center;color:black;']);

exports.default = StyledTitle;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Title/Title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Title/Title.js"); } } })();

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = _styledComponents2.default.ul.withConfig({
  displayName: 'List__List',
  componentId: 'b892xj-0'
})(['margin:0;padding:0;list-style:none;']);

exports.default = List;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/List/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/List/List.js"); } } })();

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = _styledComponents2.default.li.withConfig({
  displayName: 'ListItem__ListItem',
  componentId: 'uhbyhs-0'
})(['display:inline-block;margin-left:10px;&:first-child{margin-left:0;}']);

exports.default = ListItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/List/ListItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/List/ListItem.js"); } } })();

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _Input2 = __webpack_require__(665);

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Input = _Input3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/fields/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/fields/index.js"); } } })();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(77);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(50);

var _reduxForm = __webpack_require__(581);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class,
    _temp2,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/fields/Input/Input.js';

var Input = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.renderField = function (field) {
      var _this$props = _this.props,
          type = _this$props.type,
          placeholder = _this$props.placeholder;
      var input = field.input;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('input', (0, _extends3.default)({}, input, { type: type || 'text', placeholder: placeholder, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          name = _props.name;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('label', { htmlFor: name, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, label), _react2.default.createElement(_reduxForm.Field, { id: name, name: name, component: this.renderField, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return Input;
}(_react.Component), _class.propTypes = {
  label: _propTypes.PropTypes.string.isRequired,
  name: _propTypes.PropTypes.string.isRequired,
  type: _propTypes.PropTypes.string,
  placeholder: _propTypes.PropTypes.string
}, _temp2);
exports.default = Input;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/fields/Input/Input.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/fields/Input/Input.js"); } } })();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.page = undefined;

var _Page = __webpack_require__(667);

var _Page2 = _interopRequireDefault(_Page);

var _Connect = __webpack_require__(673);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.page = _Page2.default;
exports.connect = _Connect2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); } } })();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(77);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(589);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _index = __webpack_require__(73);

var _index2 = _interopRequireDefault(_index);

var _lodash = __webpack_require__(668);

var _api = __webpack_require__(602);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(586);

var _store = __webpack_require__(608);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js';


function hoc() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
              lineNumber: 48
            }
          }));
        }
      }], [{
        key: 'getInitialProps',
        value: function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
            var req = _ref3.req,
                res = _ref3.res,
                store = _ref3.store;
            var isServer, response;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    isServer = typeof window === 'undefined';

                    if (!(!isServer && !params.restricted)) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt('return');

                  case 3:
                    _context.next = 5;
                    return (0, _api2.default)('/load-auth', { req: req });

                  case 5:
                    response = _context.sent;
                    _context.prev = 6;

                    if (!response.data) {
                      _context.next = 14;
                      break;
                    }

                    if (!(!(0, _lodash.get)(response, 'data.name') && params.restricted)) {
                      _context.next = 13;
                      break;
                    }

                    if (!res) {
                      _context.next = 12;
                      break;
                    }

                    res.redirect('/restricted');
                    return _context.abrupt('return');

                  case 12:
                    _index2.default.push('/restricted');

                  case 13:

                    store.dispatch((0, _auth.loadUser)(response.data));

                  case 14:
                    _context.next = 19;
                    break;

                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](6);

                    console.log('err', _context.t0);

                  case 19:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this, [[6, 16]]);
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

exports.default = hoc;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js"); } } })();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(579);

var _app = __webpack_require__(588);

var _authSagas = __webpack_require__(599);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [rootSaga].map(_regenerator2.default.mark);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.call)(_app.runTestWatchers), (0, _effects.call)(_authSagas.runLoadUserWatchers)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/saga.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/saga.js"); } } })();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _reduxForm = __webpack_require__(581);

var _app = __webpack_require__(588);

var _app2 = _interopRequireDefault(_app);

var _authReducer = __webpack_require__(597);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  auth: _authReducer2.default,
  app: _app2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(77);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(589);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(608);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/helpers/hocs/Connect/Connect.js';


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/Connect/Connect.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/Connect/Connect.js"); } } })();

/***/ })

},[610]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L21vZHVsZXMvYXV0aC9pbmRleC5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL3JlZHV4L21vZHVsZXMvYXBwLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanM/ZWZiZDZiYSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9tb2R1bGVzL2F1dGgvYXV0aC1yZWR1Y2VyLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hdXRoL2F1dGgtdHlwZXMuanM/ZWZiZDZiYSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9tb2R1bGVzL2F1dGgvYXV0aC1zYWdhcy5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL3V0aWxzL2FwaS5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZWZiZDZiYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXIvQ29udGFpbmVyLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvbWlzYy9pbmRleC5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvbWlzYy9Mb2dvdXQvTG9nb3V0LmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vYXBwQ29uZmlnLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQnV0dG9uL0J1dHRvbi5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L1RpdGxlL1RpdGxlLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0LmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0SXRlbS5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmllbGRzL2luZGV4LmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9maWVsZHMvSW5wdXQvSW5wdXQuanM/ZWZiZDZiYSIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hvY3MvaW5kZXguanM/ZWZiZDZiYSIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hvY3MvUGFnZS9QYWdlLmpzP2VmYmQ2YmEiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYS5qcz9lZmJkNmJhIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXIuanM/ZWZiZDZiYSIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hvY3MvQ29ubmVjdC9Db25uZWN0LmpzP2VmYmQ2YmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hdXRoLXJlZHVjZXInXG5leHBvcnQgKiBmcm9tICcuL2F1dGgtc2FnYXMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9tb2R1bGVzL2F1dGgvaW5kZXguanMiLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbi8vIEFDVElPTiBUWVBFU1xuY29uc3QgU0FHQV9ERU1PID0gJ25leHRqcy9hcHAvU0FHQV9ERU1PJ1xuY29uc3QgU0FHQV9ERU1PX1NVQ0NFU1MgPSAnbmV4dGpzL2FwcC9TQUdBX0RFTU9fU1VDQ0VTUydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzYWdhX2RlbW86IHtcbiAgICBpZDogMTBcbiAgfVxufVxuXG4vLyBSRURVQ0VSXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTQUdBX0RFTU86XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc2FnYV9kZW1vOiB7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIGNhc2UgU0FHQV9ERU1PX1NVQ0NFU1M6XG4gICAgICBjb25zb2xlLmxvZygnc2FnYSBkZW1vIHN1Y2Nlc3MnKVxuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbi8vIEFDVElPTlNcbmV4cG9ydCBmdW5jdGlvbiBzYWdlRGVtb1Rlc3QoaWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTQUdBX0RFTU8sXG4gICAgaWRcbiAgfVxufVxuXG4vLyBTQUdBXG5mdW5jdGlvbiogcnVuVGVzdFdvcmtlcigpIHtcbiAgeWllbGQgcHV0KHtcbiAgICB0eXBlOiBTQUdBX0RFTU9fU1VDQ0VTU1xuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHJ1blRlc3RXYXRjaGVycygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTQUdBX0RFTU8sIHJ1blRlc3RXb3JrZXIpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9tb2R1bGVzL2FwcC5qcyIsImV4cG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXIvQ29udGFpbmVyJ1xuZXhwb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9IZWFkZXInXG5leHBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uL0J1dHRvbidcbmV4cG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlL1RpdGxlJ1xuZXhwb3J0IExpc3QgZnJvbSAnLi9MaXN0L0xpc3QnXG5leHBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0L0xpc3RJdGVtJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJpbXBvcnQge1xuICBMT0FEX1VTRVIsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBTQVZFX1VTRVIsXG4gIFNBVkVfVVNFUl9TVUNDRVNTLFxuICBMT0dPVVRfVVNFUixcbiAgTE9HT1VUX1VTRVJfU1VDQ0VTU1xufSBmcm9tICcuL2F1dGgtdHlwZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGxvYWRlZDogZmFsc2UsXG4gIHVzZXI6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPQURfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAuLi5hY3Rpb24udXNlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgY2FzZSBTQVZFX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgU0FWRV9VU0VSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogQm9vbGVhbihhY3Rpb24udXNlci5uYW1lKSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVF9VU0VSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IHt9XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9tb2R1bGVzL2F1dGgvYXV0aC1yZWR1Y2VyLmpzIiwiZXhwb3J0IGNvbnN0IExPQURfVVNFUiA9ICduZXh0anMvYXBwL0xPQURfVVNFUidcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICduZXh0anMvYXBwL0xPQURfVVNFUl9TVUNDRVNTJ1xuXG5leHBvcnQgY29uc3QgU0FWRV9VU0VSID0gJ25leHRqcy9hcHAvU0FWRV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFNBVkVfVVNFUl9TVUNDRVNTID0gJ25leHRqcy9hcHAvU0FWRV9VU0VSX1NVQ0NFU1MnXG5cbmV4cG9ydCBjb25zdCBMT0dPVVRfVVNFUiA9ICduZXh0anMvYXBwL0xPR09VVF9VU0VSJ1xuZXhwb3J0IGNvbnN0IExPR09VVF9VU0VSX1NVQ0NFU1MgPSAnbmV4dGpzL2FwcC9MT0dPVVRfVVNFUl9TVUNDRVNTJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hdXRoL2F1dGgtdHlwZXMuanMiLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBhcGkgZnJvbSAndXRpbHMvYXBpLmpzJ1xuaW1wb3J0IHtcbiAgTE9BRF9VU0VSLFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgU0FWRV9VU0VSLFxuICBTQVZFX1VTRVJfU1VDQ0VTUyxcbiAgTE9HT1VUX1VTRVIsXG4gIExPR09VVF9VU0VSX1NVQ0NFU1Ncbn0gZnJvbSAnLi9hdXRoLXR5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXIodXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPQURfVVNFUixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVVc2VyKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTQVZFX1VTRVIsXG4gICAgdXNlclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HT1VUX1VTRVJcbiAgfVxufVxuXG4vLyBTQUdBU1xuZnVuY3Rpb24qIHJ1bkxvYWRVc2VyV29ya2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIHVzZXI6IGFjdGlvbi51c2VyXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Vycm9yJywgZXJyb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24qIHJ1blNhdmVVc2VyV29ya2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoYXBpLCAnL3NhdmUtdXNlcicsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgZGF0YTogYWN0aW9uLnVzZXJcbiAgICB9KVxuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNBVkVfVVNFUl9TVUNDRVNTLFxuICAgICAgdXNlcjogcmVzLmRhdGFcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignZXJyb3InLCBlcnJvcilcbiAgfVxufVxuXG5mdW5jdGlvbiogcnVuTG9nb3V0VXNlcldvcmtlcigpIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGFwaSwgJy9sb2dvdXQnLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0J1xuICAgIH0pXG5cbiAgICBSb3V0ZXIucHVzaCgnLycpXG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HT1VUX1VTRVJfU1VDQ0VTU1xuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKCdlcnJvcicsIGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogcnVuTG9hZFVzZXJXYXRjaGVycygpIHtcbiAgeWllbGQgYWxsKFtcbiAgICB0YWtlTGF0ZXN0KExPQURfVVNFUiwgcnVuTG9hZFVzZXJXb3JrZXIpLFxuICAgIHRha2VMYXRlc3QoU0FWRV9VU0VSLCBydW5TYXZlVXNlcldvcmtlciksXG4gICAgdGFrZUxhdGVzdChMT0dPVVRfVVNFUiwgcnVuTG9nb3V0VXNlcldvcmtlcilcbiAgXSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L21vZHVsZXMvYXV0aC9hdXRoLXNhZ2FzLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwaShcbiAgdXJsLFxuICBvcHRzID0ge1xuICAgIGlzb21vcnBoaWM6IGZhbHNlLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgZGF0YTogdW5kZWZpbmVkXG4gIH1cbikge1xuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gIGNvbnN0IG1ldGhvZCA9IG9wdHMubWV0aG9kIHx8ICdnZXQnXG4gIGxldCBwcm90b2NvbCA9IGlzU2VydmVyID8gJ2h0dHA6Ly8nIDogJ2h0dHBzOi8vJ1xuICBsZXQgaGVhZGVycyA9IHt9XG4gIGNvbnN0IGNvb2tpZSA9IGlzU2VydmVyICYmIG9wdHMucmVxLmdldCgnY29va2llJylcbiAgbGV0IHBvcnQgPSAnJ1xuXG4gIGlmICh1cmwuaW5kZXhPZignYXBpLycpID09PSAwKSB7XG4gICAgLy8gYWx3YXlzIGh0dHBzXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoY29uZmlnLmRldikge1xuICAgIHByb3RvY29sID0gJ2h0dHA6Ly8nXG4gICAgcG9ydCA9IGNvbmZpZy5wb3J0XG4gIH1cblxuICBjb25zdCBhcGlVcmwgPSBgJHtwcm90b2NvbH0ke2NvbmZpZy5ob3N0fToke3BvcnR9JHt1cmx9YFxuXG4gIGlmIChjb29raWUpIHtcbiAgICBoZWFkZXJzID0geyBDb29raWU6IGNvb2tpZSB9XG4gIH1cblxuICByZXR1cm4gYXhpb3MoYXBpVXJsLCB7XG4gICAgbWV0aG9kLFxuICAgIGRhdGE6IG9wdHMuZGF0YSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgaGVhZGVyc1xuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvYXBpLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IG5leHRSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmltcG9ydCByb290U2FnYSBmcm9tICcuL3NhZ2EnXG5cbmNvbnN0IHJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKS5kZWZhdWx0XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxuICApXG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG4gIHJldHVybiBzdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlZHV4U2FnYShCYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB3aXRoUmVkdXgoaW5pdFN0b3JlKShuZXh0UmVkdXhTYWdhKEJhc2VDb21wb25lbnQpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IEJveCB9IGZyb20gJ2dyaWQtc3R5bGVkJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgVGl0bGUsIEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdjb21wb25lbnRzL2ZpZWxkcydcbmltcG9ydCB7IHNhZ2VEZW1vVGVzdCB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXBwJ1xuaW1wb3J0IHsgc2F2ZVVzZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2F1dGgnXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSAnaGVscGVycy9ob2NzJ1xuXG5AcGFnZSgpXG5AY29ubmVjdChcbiAgKHsgYXV0aCB9KSA9PiAoe1xuICAgIHVzZXI6IGF1dGgudXNlclxuICB9KSxcbiAgeyBzYWdlRGVtb1Rlc3QsIHNhdmVVc2VyIH1cbilcbkByZWR1eEZvcm0oe1xuICBmb3JtOiAndGVzdCdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNhZ2VEZW1vVGVzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzYXZlVXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB1c2VyOiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zYWdlRGVtb1Rlc3QoMjApXG4gIH1cblxuICBoYW5kbGVTYXZlVXNlciA9IGZpZWxkcyA9PiB7XG4gICAgdGhpcy5wcm9wcy5zYXZlVXNlcihmaWVsZHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+SG9tZSBwYWdlPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8VGl0bGU+SG9tZSBwYWdlPC9UaXRsZT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8aDI+SG9tZTwvaDI+XG4gICAgICAgIDxCb3ggbWI9ezEwfT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNhbGwgc2FnYSBkZW1vIHdhdGNoZXI8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWI9ezEwfSBtdD17MzB9PlxuICAgICAgICAgIE5hbWUgc3RvcmVkIGluIHJlZGlzOiA8c3Ryb25nPnt0aGlzLnByb3BzLnVzZXIubmFtZX08L3N0cm9uZz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWI9ezEwfSBtdD17MzB9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTYXZlVXNlcil9PlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJuYW1lXCIgbGFiZWw9XCJVc2VybmFtZVwiIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxCdXR0b24+U2F2ZSB1c2VyIHRvIFJlZGlzPC9CdXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JpZC1zdHlsZWQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbmBcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXIvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ2dyaWQtc3R5bGVkJ1xuXG5pbXBvcnQgeyBMb2dvdXQgfSBmcm9tICdjb250YWluZXJzL21pc2MnXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PlxuICA8ZGl2PlxuICAgIDxHcmlkIHdpZHRoPXsxIC8gMn0+XG4gICAgICA8TGlzdD5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQ/aWQ9MTBcIiBhcz1cIi9hYm91dC8xMFwiIHByZWZldGNoPlxuICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWNyZXRcIiBhcz1cIi9zZWNyZXRcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhPlJlc3RyaWN0ZWQgcGFnZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgPC9HcmlkPlxuICAgIDxHcmlkIHdpZHRoPXsxIC8gMn0+XG4gICAgICA8TG9nb3V0IC8+XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzIiwiZXhwb3J0IExvZ291dCBmcm9tICcuL0xvZ291dC9Mb2dvdXQnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL21pc2MvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hdXRoJ1xuXG5AY29ubmVjdChudWxsLCB7IGxvZ291dCB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nb3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9XG5cbiAgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubG9nb3V0KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNwYW4gb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXR9PkxvZ291dDwvc3Bhbj5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9taXNjL0xvZ291dC9Mb2dvdXQuanMiLCIvLyBjb25zdCBpcCA9IHJlcXVpcmUoJ2lwJylcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuY29uc3QgY29uZmlnID0ge1xuICAvLyBob3N0OiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ2xvY2FsaG9zdCcgOiBpcC5hZGRyZXNzKCksXG4gIGhvc3Q6IGlzU2VydmVyID8gJ2xvY2FsaG9zdCcgOiBkb2N1bWVudC5kb21haW4sXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcbiAgZGV2OiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBDb25maWcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgb25DbGljaywgdHlwZSB9KSA9PlxuICA8YnV0dG9uIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICB0eXBlOiAnc3VibWl0JyxcbiAgb25DbGljazogdW5kZWZpbmVkXG59XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnNlY29uZGFyeSAmJiAnIzVjYjg1Yyd9O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmU2ZGE0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQnV0dG9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9CdXR0b24vQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PlxuICA8aDEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9oMT5cblxuVGl0bGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cblRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufVxuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZChUaXRsZSlgXG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRUaXRsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvVGl0bGUvVGl0bGUuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0xpc3QvTGlzdC5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0SXRlbS5qcyIsImV4cG9ydCBJbnB1dCBmcm9tICcuL0lucHV0L0lucHV0J1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9maWVsZHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyRmllbGQgPSBmaWVsZCA9PiB7XG4gICAgY29uc3QgeyB0eXBlLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaW5wdXQgfSA9IGZpZWxkXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZSB8fCAndGV4dCd9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBuYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPEZpZWxkIGlkPXtuYW1lfSBuYW1lPXtuYW1lfSBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZmllbGRzL0lucHV0L0lucHV0LmpzIiwiZXhwb3J0IHBhZ2UgZnJvbSAnLi9QYWdlL1BhZ2UnXG5leHBvcnQgY29ubmVjdCBmcm9tICcuL0Nvbm5lY3QvQ29ubmVjdCdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hlbHBlcnMvaG9jcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFwaSBmcm9tICd1dGlscy9hcGknXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJ3JlZHV4L3N0b3JlJ1xuXG5mdW5jdGlvbiBob2MocGFyYW1zID0ge30pIHtcbiAgcmV0dXJuIENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgICBAd2l0aFJlZHV4KFxuICAgICAgaW5pdFN0b3JlLFxuICAgICAgKHsgYXV0aCB9KSA9PiAoe1xuICAgICAgICB1c2VyOiBhdXRoLnVzZXJcbiAgICAgIH0pLFxuICAgICAgeyBsb2FkVXNlciB9XG4gICAgKVxuICAgIGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBzdG9yZSB9KSB7XG4gICAgICAgIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuICAgICAgICBpZiAoIWlzU2VydmVyICYmICFwYXJhbXMucmVzdHJpY3RlZCkge1xuICAgICAgICAgIC8vIHVzZXIgbG9hZCB3YXMgYWxyZWFkeSBjYWxsZWRcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpKCcvbG9hZC1hdXRoJywgeyByZXEgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWdldChyZXNwb25zZSwgJ2RhdGEubmFtZScpICYmIHBhcmFtcy5yZXN0cmljdGVkKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICByZXMucmVkaXJlY3QoJy9yZXN0cmljdGVkJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3Jlc3RyaWN0ZWQnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChsb2FkVXNlcihyZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycm9yKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFBhZ2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob2NcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hlbHBlcnMvaG9jcy9QYWdlL1BhZ2UuanMiLCJpbXBvcnQgeyBhbGwsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCB7IHJ1blRlc3RXYXRjaGVycyB9IGZyb20gJy4vbW9kdWxlcy9hcHAnXG5pbXBvcnQgeyBydW5Mb2FkVXNlcldhdGNoZXJzIH0gZnJvbSAnLi9tb2R1bGVzL2F1dGgvYXV0aC1zYWdhcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2NhbGwocnVuVGVzdFdhdGNoZXJzKSwgY2FsbChydW5Mb2FkVXNlcldhdGNoZXJzKV0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zYWdhLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSdcblxuaW1wb3J0IGFwcCBmcm9tICcuL21vZHVsZXMvYXBwJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi9tb2R1bGVzL2F1dGgvYXV0aC1yZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3JtOiBmb3JtUmVkdWNlcixcbiAgYXV0aCxcbiAgYXBwXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gZGVjb3JhdG9yKHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChpbml0U3RvcmUsIHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKVxuICAgIGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29ubmVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkJBO0FBY0E7QUFDQTs7Ozs7Ozs7O0FBN0NBO0FBQ0E7OztBQXFDQTtBQUNBO0FBckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUFBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUhBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBR0E7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFHQTtBQUZBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0tBO0FBT0E7QUFPQTtBQWtEQTtBQUNBOzs7OztBQTlFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBU0E7QUFDQTs7O0FBb0JBO0FBQ0E7QUF0QkE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTs7QUFJQTtBQUZBOzs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFGQTtBQUZBO0FBQUE7O0FBU0E7QUFBQTtBQURBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTtBQWJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBUEE7O0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFEQTtBQU9BO0FBSEE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQXhCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQVJBOztBQUNBO0FBQUE7QUFGQTtBQU9BO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUdBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFUQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFSQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7Ozs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBM0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFMQTs7QUFDQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBcUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFWQTtBQUNBO0FBV0E7QUFaQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBaUJBO0FBQ0E7QUFEQTtBQWpCQTtBQUFBO0FBQ0E7QUFtQkE7QUFwQkE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFyQkE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUF0QkE7QUFBQTtBQXVCQTtBQUNBO0FBREE7QUF2QkE7QUFDQTtBQXlCQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQTlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFnQ0E7QUFDQTtBQURBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQWdDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBSUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        