
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.loadUser = loadUser;
exports.saveUser = saveUser;
exports.logout = logout;
exports.runLoadUserWatcher = runLoadUserWatcher;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(77);

var _extends3 = _interopRequireDefault(_extends2);

var _effects = __webpack_require__(578);

var _index = __webpack_require__(73);

var _index2 = _interopRequireDefault(_index);

var _api = __webpack_require__(597);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runLoadUserWorker, runSaveUserWorker, runLogoutUserWorker, runLoadUserWatcher].map(_regenerator2.default.mark);

var LOAD_USER = 'nextjs/app/LOAD_USER';
var LOAD_USER_SUCCESS = 'nextjs/app/LOAD_USER_SUCCESS';

var SAVE_USER = 'nextjs/app/SAVE_USER';
var SAVE_USER_SUCCESS = 'nextjs/app/SAVE_USER_SUCCESS';

var LOGOUT_USER = 'nextjs/app/LOGOUT_USER';
var LOGOUT_USER_SUCCESS = 'nextjs/app/LOGOUT_USER_SUCCESS';

var initialState = {
  loading: false,
  loaded: false,
  user: {}
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LOAD_USER:
      return (0, _extends3.default)({}, state, {
        loading: true,
        loaded: false
      });
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        loaded: true,
        user: (0, _extends3.default)({}, action.user)
      };
    case SAVE_USER:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case SAVE_USER_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        user: action.user
      });
    case LOGOUT_USER:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case LOGOUT_USER_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        user: {}
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

function saveUser(user) {
  return {
    type: SAVE_USER,
    user: user
  };
}

function logout() {
  return {
    type: LOGOUT_USER
  };
}

// SAGA
function runLoadUserWorker(action) {
  return _regenerator2.default.wrap(function runLoadUserWorker$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)({
            type: LOAD_USER_SUCCESS,
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
            type: SAVE_USER_SUCCESS,
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
            type: LOGOUT_USER_SUCCESS
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

function runLoadUserWatcher() {
  return _regenerator2.default.wrap(function runLoadUserWatcher$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.all)([(0, _effects.takeLatest)(LOAD_USER, runLoadUserWorker), (0, _effects.takeLatest)(SAVE_USER, runSaveUserWorker), (0, _effects.takeLatest)(LOGOUT_USER, runLogoutUserWorker)]);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth.js"); } } })();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.sageDemoTest = sageDemoTest;
exports.runTestWatcher = runTestWatcher;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(115);

var _assign2 = _interopRequireDefault(_assign);

var _effects = __webpack_require__(578);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runTestWorker, runTestWatcher].map(_regenerator2.default.mark);

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

function runTestWatcher() {
  return _regenerator2.default.wrap(function runTestWatcher$(_context2) {
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

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = exports.Title = exports.Button = exports.Header = exports.Container = undefined;

var _Container2 = __webpack_require__(628);

var _Container3 = _interopRequireDefault(_Container2);

var _Header2 = __webpack_require__(629);

var _Header3 = _interopRequireDefault(_Header2);

var _Button2 = __webpack_require__(661);

var _Button3 = _interopRequireDefault(_Button2);

var _Title2 = __webpack_require__(662);

var _Title3 = _interopRequireDefault(_Title2);

var _List2 = __webpack_require__(663);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(664);

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
exports.default = api;

var _axios = __webpack_require__(635);

var _axios2 = _interopRequireDefault(_axios);

var _appConfig = __webpack_require__(654);

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

  if (url.indexOf('api/') === 0) {
    // always https
    return '';
  }

  if (_appConfig2.default.dev) {
    protocol = 'http://';
  }

  var apiUrl = '' + protocol + _appConfig2.default.host + ':' + _appConfig2.default.port + url;

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

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(568);

var _reduxDevtoolsExtension = __webpack_require__(670);

var _nextReduxWrapper = __webpack_require__(587);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(671);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(604);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _saga = __webpack_require__(672);

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = __webpack_require__(673).default;

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

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(606);


/***/ }),

/***/ 606:
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

var _reactRedux = __webpack_require__(565);

var _reduxForm = __webpack_require__(580);

var _gridStyled = __webpack_require__(583);

var _layout = __webpack_require__(594);

var _fields = __webpack_require__(665);

var _app = __webpack_require__(586);

var _auth = __webpack_require__(574);

var _hocs = __webpack_require__(667);

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

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = __webpack_require__(583);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = (0, _styledComponents2.default)(_gridStyled.Box).withConfig({
  displayName: 'Container__Container',
  componentId: 'ewafzr-0'
})(['max-width:1024px;margin-left:auto;margin-right:auto;']);

exports.default = Container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); } } })();

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(630);

var _link2 = _interopRequireDefault(_link);

var _gridStyled = __webpack_require__(583);

var _misc = __webpack_require__(633);

var _ = __webpack_require__(594);

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

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logout = undefined;

var _Logout2 = __webpack_require__(634);

var _Logout3 = _interopRequireDefault(_Logout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Logout = _Logout3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/containers/misc/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/containers/misc/index.js"); } } })();

/***/ }),

/***/ 634:
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

var _reactRedux = __webpack_require__(565);

var _auth = __webpack_require__(574);

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

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ip = __webpack_require__(655);

var config = {
  host:  true ? 'localhost' : ip.address(),
  port: "3000" || 3000,
  dev: "development" !== 'production'
};

module.exports = config;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/appConfig.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/appConfig.js"); } } })();

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

/***/ 662:
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

/***/ 663:
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

/***/ 664:
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

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _Input2 = __webpack_require__(666);

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Input = _Input3.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/fields/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/fields/index.js"); } } })();

/***/ }),

/***/ 666:
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

var _reduxForm = __webpack_require__(580);

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

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.page = undefined;

var _Page = __webpack_require__(668);

var _Page2 = _interopRequireDefault(_Page);

var _Connect = __webpack_require__(674);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.page = _Page2.default;
exports.connect = _Connect2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); } } })();

/***/ }),

/***/ 668:
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

var _nextReduxWrapper = __webpack_require__(587);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _index = __webpack_require__(73);

var _index2 = _interopRequireDefault(_index);

var _lodash = __webpack_require__(669);

var _api = __webpack_require__(597);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(574);

var _store = __webpack_require__(603);

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
              lineNumber: 44
            }
          }));
        }
      }], [{
        key: 'getInitialProps',
        value: function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
            var req = _ref3.req,
                store = _ref3.store;
            var isServer, res;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    isServer = typeof window === 'undefined';

                    if (!(0, _lodash.get)(store.getState(), 'auth.loaded') && params.restricted) {
                      _index2.default.push('/restricted');
                    }

                    if (!((0, _lodash.get)(store.getState(), 'auth.loaded') || !isServer)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt('return');

                  case 4:
                    _context.next = 6;
                    return (0, _api2.default)('/load-auth', { req: req });

                  case 6:
                    res = _context.sent;

                    try {
                      if (res.data) {
                        store.dispatch((0, _auth.loadUser)(res.data));
                      }
                    } catch (error) {
                      console.log('err', error);
                    }

                  case 8:
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

exports.default = hoc;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js"); } } })();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(578);

var _app = __webpack_require__(586);

var _auth = __webpack_require__(574);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [rootSaga].map(_regenerator2.default.mark);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.call)(_app.runTestWatcher), (0, _effects.call)(_auth.runLoadUserWatcher)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/saga.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/saga.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(568);

var _reduxForm = __webpack_require__(580);

var _app = __webpack_require__(586);

var _app2 = _interopRequireDefault(_app);

var _auth = __webpack_require__(574);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  auth: _auth2.default,
  app: _app2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); } } })();

/***/ }),

/***/ 674:
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

var _nextReduxWrapper = __webpack_require__(587);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(603);

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

},[605]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L21vZHVsZXMvYXV0aC5qcz83NGUyYmFjIiwid2VicGFjazovLy8uL3JlZHV4L21vZHVsZXMvYXBwLmpzPzc0ZTJiYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanM/NzRlMmJhYyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkuanM/NzRlMmJhYyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz83NGUyYmFjIiwid2VicGFjazovLy8uL3BhZ2VzPzc0ZTJiYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGFpbmVyL0NvbnRhaW5lci5qcz83NGUyYmFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanM/YzYwY2E2ZiIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL21pc2MvaW5kZXguanM/YzYwY2E2ZiIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL21pc2MvTG9nb3V0L0xvZ291dC5qcz9jNjBjYTZmIiwid2VicGFjazovLy8uL2FwcENvbmZpZy5qcz9jNjBjYTZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0J1dHRvbi9CdXR0b24uanM/YzYwY2E2ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9UaXRsZS9UaXRsZS5qcz9jNjBjYTZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xpc3QvTGlzdC5qcz9jNjBjYTZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xpc3QvTGlzdEl0ZW0uanM/YzYwY2E2ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpZWxkcy9pbmRleC5qcz9jNjBjYTZmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmllbGRzL0lucHV0L0lucHV0LmpzP2M2MGNhNmYiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL2luZGV4LmpzP2M2MGNhNmYiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL1BhZ2UvUGFnZS5qcz9jNjBjYTZmIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2EuanM/YzYwY2E2ZiIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzP2M2MGNhNmYiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcz9jNjBjYTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IGFwaSBmcm9tICd1dGlscy9hcGkuanMnXG5cbmNvbnN0IExPQURfVVNFUiA9ICduZXh0anMvYXBwL0xPQURfVVNFUidcbmNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ25leHRqcy9hcHAvTE9BRF9VU0VSX1NVQ0NFU1MnXG5cbmNvbnN0IFNBVkVfVVNFUiA9ICduZXh0anMvYXBwL1NBVkVfVVNFUidcbmNvbnN0IFNBVkVfVVNFUl9TVUNDRVNTID0gJ25leHRqcy9hcHAvU0FWRV9VU0VSX1NVQ0NFU1MnXG5cbmNvbnN0IExPR09VVF9VU0VSID0gJ25leHRqcy9hcHAvTE9HT1VUX1VTRVInXG5jb25zdCBMT0dPVVRfVVNFUl9TVUNDRVNTID0gJ25leHRqcy9hcHAvTE9HT1VUX1VTRVJfU1VDQ0VTUydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgbG9hZGVkOiBmYWxzZSxcbiAgdXNlcjoge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLmFjdGlvbi51c2VyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBjYXNlIFNBVkVfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSBTQVZFX1VTRVJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVF9VU0VSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IHt9XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcih1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9BRF9VU0VSLFxuICAgIHVzZXJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVVzZXIodXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNBVkVfVVNFUixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dPVVRfVVNFUlxuICB9XG59XG5cbi8vIFNBR0FcbmZ1bmN0aW9uKiBydW5Mb2FkVXNlcldvcmtlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICB1c2VyOiBhY3Rpb24udXNlclxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKCdlcnJvcicsIGVycm9yKVxuICB9XG59XG5cbmZ1bmN0aW9uKiBydW5TYXZlVXNlcldvcmtlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGFwaSwgJy9zYXZlLXVzZXInLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGRhdGE6IGFjdGlvbi51c2VyXG4gICAgfSlcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTQVZFX1VTRVJfU1VDQ0VTUyxcbiAgICAgIHVzZXI6IHJlcy5kYXRhXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Vycm9yJywgZXJyb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24qIHJ1bkxvZ291dFVzZXJXb3JrZXIoKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChhcGksICcvbG9nb3V0Jywge1xuICAgICAgbWV0aG9kOiAncG9zdCdcbiAgICB9KVxuXG4gICAgUm91dGVyLnB1c2goJy8nKVxuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR09VVF9VU0VSX1NVQ0NFU1NcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignZXJyb3InLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHJ1bkxvYWRVc2VyV2F0Y2hlcigpIHtcbiAgeWllbGQgYWxsKFtcbiAgICB0YWtlTGF0ZXN0KExPQURfVVNFUiwgcnVuTG9hZFVzZXJXb3JrZXIpLFxuICAgIHRha2VMYXRlc3QoU0FWRV9VU0VSLCBydW5TYXZlVXNlcldvcmtlciksXG4gICAgdGFrZUxhdGVzdChMT0dPVVRfVVNFUiwgcnVuTG9nb3V0VXNlcldvcmtlcilcbiAgXSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L21vZHVsZXMvYXV0aC5qcyIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuLy8gQUNUSU9OIFRZUEVTXG5jb25zdCBTQUdBX0RFTU8gPSAnbmV4dGpzL2FwcC9TQUdBX0RFTU8nXG5jb25zdCBTQUdBX0RFTU9fU1VDQ0VTUyA9ICduZXh0anMvYXBwL1NBR0FfREVNT19TVUNDRVNTJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNhZ2FfZGVtbzoge1xuICAgIGlkOiAxMFxuICB9XG59XG5cbi8vIFJFRFVDRVJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNBR0FfREVNTzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzYWdhX2RlbW86IHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSBTQUdBX0RFTU9fU1VDQ0VTUzpcbiAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGRlbW8gc3VjY2VzcycpXG4gICAgICByZXR1cm4gc3RhdGVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VEZW1vVGVzdChpZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNBR0FfREVNTyxcbiAgICBpZFxuICB9XG59XG5cbi8vIFNBR0FcbmZ1bmN0aW9uKiBydW5UZXN0V29ya2VyKCkge1xuICB5aWVsZCBwdXQoe1xuICAgIHR5cGU6IFNBR0FfREVNT19TVUNDRVNTXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiogcnVuVGVzdFdhdGNoZXIoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0FHQV9ERU1PLCBydW5UZXN0V29ya2VyKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hcHAuanMiLCJleHBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyL0NvbnRhaW5lcidcbmV4cG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIvSGVhZGVyJ1xuZXhwb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi9CdXR0b24nXG5leHBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZS9UaXRsZSdcbmV4cG9ydCBMaXN0IGZyb20gJy4vTGlzdC9MaXN0J1xuZXhwb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdC9MaXN0SXRlbSdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwaShcbiAgdXJsLFxuICBvcHRzID0ge1xuICAgIGlzb21vcnBoaWM6IGZhbHNlLFxuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgZGF0YTogdW5kZWZpbmVkXG4gIH1cbikge1xuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gIGNvbnN0IG1ldGhvZCA9IG9wdHMubWV0aG9kIHx8ICdnZXQnXG4gIGxldCBwcm90b2NvbCA9IGlzU2VydmVyID8gJ2h0dHA6Ly8nIDogJ2h0dHBzOi8vJ1xuICBsZXQgaGVhZGVycyA9IHt9XG4gIGNvbnN0IGNvb2tpZSA9IGlzU2VydmVyICYmIG9wdHMucmVxLmdldCgnY29va2llJylcblxuICBpZiAodXJsLmluZGV4T2YoJ2FwaS8nKSA9PT0gMCkge1xuICAgIC8vIGFsd2F5cyBodHRwc1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGNvbmZpZy5kZXYpIHtcbiAgICBwcm90b2NvbCA9ICdodHRwOi8vJ1xuICB9XG5cbiAgY29uc3QgYXBpVXJsID0gYCR7cHJvdG9jb2x9JHtjb25maWcuaG9zdH06JHtjb25maWcucG9ydH0ke3VybH1gXG5cbiAgaWYgKGNvb2tpZSkge1xuICAgIGhlYWRlcnMgPSB7IENvb2tpZTogY29va2llIH1cbiAgfVxuXG4gIHJldHVybiBheGlvcyhhcGlVcmwsIHtcbiAgICBtZXRob2QsXG4gICAgZGF0YTogb3B0cy5kYXRhLFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICBoZWFkZXJzXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9hcGkuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgbmV4dFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcblxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYSdcblxuY29uc3QgcmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcicpLmRlZmF1bHRcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpXG4gIClcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVkdXhTYWdhKEJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHdpdGhSZWR1eChpbml0U3RvcmUpKG5leHRSZWR1eFNhZ2EoQmFzZUNvbXBvbmVudCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JpZC1zdHlsZWQnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBUaXRsZSwgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2NvbXBvbmVudHMvZmllbGRzJ1xuaW1wb3J0IHsgc2FnZURlbW9UZXN0IH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hcHAnXG5pbXBvcnQgeyBzYXZlVXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcbmltcG9ydCB7IHBhZ2UgfSBmcm9tICdoZWxwZXJzL2hvY3MnXG5cbkBwYWdlKClcbkBjb25uZWN0KFxuICAoeyBhdXRoIH0pID0+ICh7XG4gICAgdXNlcjogYXV0aC51c2VyXG4gIH0pLFxuICB7IHNhZ2VEZW1vVGVzdCwgc2F2ZVVzZXIgfVxuKVxuQHJlZHV4Rm9ybSh7XG4gIGZvcm06ICd0ZXN0J1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2FnZURlbW9UZXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNhdmVVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHVzZXI6IHt9XG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNhZ2VEZW1vVGVzdCgyMClcbiAgfVxuXG4gIGhhbmRsZVNhdmVVc2VyID0gZmllbGRzID0+IHtcbiAgICB0aGlzLnByb3BzLnNhdmVVc2VyKGZpZWxkcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Ib21lIHBhZ2U8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxUaXRsZT5Ib21lIHBhZ2U8L1RpdGxlPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgICAgPEJveCBtYj17MTB9PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2FsbCBzYWdhIGRlbW8gd2F0Y2hlcjwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYj17MTB9IG10PXszMH0+XG4gICAgICAgICAgTmFtZSBzdG9yZWQgaW4gcmVkaXM6IDxzdHJvbmc+e3RoaXMucHJvcHMudXNlci5uYW1lfTwvc3Ryb25nPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYj17MTB9IG10PXszMH0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNhdmVVc2VyKX0+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cIm5hbWVcIiBsYWJlbD1cIlVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPEJ1dHRvbj5TYXZlIHVzZXIgdG8gUmVkaXM8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdncmlkLXN0eWxlZCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRhaW5lci9Db250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnZ3JpZC1zdHlsZWQnXG5cbmltcG9ydCB7IExvZ291dCB9IGZyb20gJ2NvbnRhaW5lcnMvbWlzYydcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtIH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+XG4gIDxkaXY+XG4gICAgPEdyaWQgd2lkdGg9ezEgLyAyfT5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dD9pZD0xMFwiIGFzPVwiL2Fib3V0LzEwXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlY3JldFwiIGFzPVwiL3NlY3JldFwiIHByZWZldGNoPlxuICAgICAgICAgICAgPGE+UmVzdHJpY3RlZCBwYWdlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDwvTGlzdD5cbiAgICA8L0dyaWQ+XG4gICAgPEdyaWQgd2lkdGg9ezEgLyAyfT5cbiAgICAgIDxMb2dvdXQgLz5cbiAgICA8L0dyaWQ+XG4gIDwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanMiLCJleHBvcnQgTG9nb3V0IGZyb20gJy4vTG9nb3V0L0xvZ291dCdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvbWlzYy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBpbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2F1dGgnXG5cbkBjb25uZWN0KG51bGwsIHsgbG9nb3V0IH0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge31cblxuICBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5sb2dvdXQoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c3BhbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ291dH0+TG9nb3V0PC9zcGFuPlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL21pc2MvTG9nb3V0L0xvZ291dC5qcyIsImNvbnN0IGlwID0gcmVxdWlyZSgnaXAnKVxuXG5jb25zdCBjb25maWcgPSB7XG4gIGhvc3Q6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnbG9jYWxob3N0JyA6IGlwLmFkZHJlc3MoKSxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLFxuICBkZXY6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcENvbmZpZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBvbkNsaWNrLCB0eXBlIH0pID0+XG4gIDxidXR0b24gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHR5cGU6ICdzdWJtaXQnLFxuICBvbkNsaWNrOiB1bmRlZmluZWRcbn1cblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGJhY2tncm91bmQ6ICMzMzdhYjc7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuc2Vjb25kYXJ5ICYmICcjNWNiODVjJ307XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZTZkYTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRCdXR0b25cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0J1dHRvbi9CdXR0b24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+XG4gIDxoMSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAge2NoaWxkcmVufVxuICA8L2gxPlxuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59XG5cbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkKFRpdGxlKWBcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFRpdGxlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9UaXRsZS9UaXRsZS5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgTGlzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0LmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3RJdGVtLmpzIiwiZXhwb3J0IElucHV0IGZyb20gJy4vSW5wdXQvSW5wdXQnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2ZpZWxkcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICByZW5kZXJGaWVsZCA9IGZpZWxkID0+IHtcbiAgICBjb25zdCB7IHR5cGUsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpbnB1dCB9ID0gZmllbGRcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPXt0eXBlIHx8ICd0ZXh0J30gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIG5hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8RmllbGQgaWQ9e25hbWV9IG5hbWU9e25hbWV9IGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9maWVsZHMvSW5wdXQvSW5wdXQuanMiLCJleHBvcnQgcGFnZSBmcm9tICcuL1BhZ2UvUGFnZSdcbmV4cG9ydCBjb25uZWN0IGZyb20gJy4vQ29ubmVjdC9Db25uZWN0J1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgYXBpIGZyb20gJ3V0aWxzL2FwaSdcbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hdXRoJ1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAncmVkdXgvc3RvcmUnXG5cbmZ1bmN0aW9uIGhvYyhwYXJhbXMgPSB7fSkge1xuICByZXR1cm4gQ29tcG9zZWRDb21wb25lbnQgPT4ge1xuICAgIEB3aXRoUmVkdXgoXG4gICAgICBpbml0U3RvcmUsXG4gICAgICAoeyBhdXRoIH0pID0+ICh7XG4gICAgICAgIHVzZXI6IGF1dGgudXNlclxuICAgICAgfSksXG4gICAgICB7IGxvYWRVc2VyIH1cbiAgICApXG4gICAgY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBzdG9yZSB9KSB7XG4gICAgICAgIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuICAgICAgICBpZiAoIWdldChzdG9yZS5nZXRTdGF0ZSgpLCAnYXV0aC5sb2FkZWQnKSAmJiBwYXJhbXMucmVzdHJpY3RlZCkge1xuICAgICAgICAgIFJvdXRlci5wdXNoKCcvcmVzdHJpY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0KHN0b3JlLmdldFN0YXRlKCksICdhdXRoLmxvYWRlZCcpIHx8ICFpc1NlcnZlcikge1xuICAgICAgICAgIC8vIHVzZXIgbG9hZGVkIG9yIGNhbGxlZCBmcm9tIGNsaWVudFxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpKCcvbG9hZC1hdXRoJywgeyByZXEgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gobG9hZFVzZXIocmVzLmRhdGEpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUGFnZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvY1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL1BhZ2UvUGFnZS5qcyIsImltcG9ydCB7IGFsbCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IHsgcnVuVGVzdFdhdGNoZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2FwcCdcbmltcG9ydCB7IHJ1bkxvYWRVc2VyV2F0Y2hlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2NhbGwocnVuVGVzdFdhdGNoZXIpLCBjYWxsKHJ1bkxvYWRVc2VyV2F0Y2hlcildKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc2FnYS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nXG5cbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcCdcbmltcG9ydCBhdXRoIGZyb20gJy4vbW9kdWxlcy9hdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3JtOiBmb3JtUmVkdWNlcixcbiAgYXV0aCxcbiAgYXBwXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gZGVjb3JhdG9yKHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChpbml0U3RvcmUsIHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKVxuICAgIGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29ubmVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFnRUE7QUFPQTtBQU9BO0FBa0RBO0FBQ0E7Ozs7Ozs7OztBQWpJQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFpRkE7QUFDQTtBQWpGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUdBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUdBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFLQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUlBO0FBRkE7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTtBQVJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUZBO0FBRkE7QUFBQTs7QUFTQTtBQUFBO0FBREE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQUNBO0FBYkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7OztBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFQQTs7QUFTQTtBQUFBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTtBQWJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBY0E7QUFDQTs7Ozs7Ozs7O0FBN0NBO0FBQ0E7OztBQXFDQTtBQUNBO0FBckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUFBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFEQTtBQU9BO0FBSEE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBeEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBUkE7O0FBQ0E7QUFBQTtBQUZBO0FBT0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBR0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF6Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQVJBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUhBOzs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQTNCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBTEE7O0FBQ0E7QUFBQTtBQUhBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQWlDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQVZBO0FBQ0E7QUFXQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBaEJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFxQkE7QUFDQTtBQURBO0FBckJBO0FBQ0E7QUF1QkE7QUFBQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBNUJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBNEJBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUFJQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        