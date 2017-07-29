
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = exports.Title = exports.Button = exports.Header = exports.Container = undefined;

var _Container2 = __webpack_require__(598);

var _Container3 = _interopRequireDefault(_Container2);

var _Header2 = __webpack_require__(614);

var _Header3 = _interopRequireDefault(_Header2);

var _Button2 = __webpack_require__(618);

var _Button3 = _interopRequireDefault(_Button2);

var _Title2 = __webpack_require__(619);

var _Title3 = _interopRequireDefault(_Title2);

var _List2 = __webpack_require__(620);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(621);

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

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.loadUser = loadUser;

var _assign = __webpack_require__(115);

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

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(567);

var _reduxDevtoolsExtension = __webpack_require__(630);

var _nextReduxWrapper = __webpack_require__(578);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(631);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(591);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _saga = __webpack_require__(632);

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = __webpack_require__(633).default;

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

/***/ 594:
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

var _effects = __webpack_require__(579);

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

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = __webpack_require__(599);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = (0, _styledComponents2.default)(_gridStyled.Box).withConfig({
  displayName: 'Container__Container',
  componentId: 'ewafzr-0'
})(['max-width:1024px;margin-left:auto;margin-right:auto;']);

exports.default = Container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); } } })();

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(615);

var _link2 = _interopRequireDefault(_link);

var _ = __webpack_require__(583);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js';


var Header = function Header() {
  return _react2.default.createElement(_.List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_.ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, ' ', _react2.default.createElement(_link2.default, { href: '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Home'))), _react2.default.createElement(_.ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, ' ', _react2.default.createElement(_link2.default, { href: '/about?id=10', as: '/about/10', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'About'))));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Header/Header.js"); } } })();

/***/ }),

/***/ 618:
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
      onClick = _ref.onClick;
  return _react2.default.createElement('button', { className: className, onClick: onClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, children);
};

Button.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  onClick: _propTypes.PropTypes.func.isRequired,
  className: _propTypes.PropTypes.string
};

Button.defaultProps = {
  className: ''
};

var StyledButton = (0, _styledComponents2.default)(Button).withConfig({
  displayName: 'Button__StyledButton',
  componentId: 's19mmwfk-0'
})(['background:#337ab7;background:', ';border:1px solid #2e6da4;box-shadow:none;color:#fff;padding:6px 12px;cursor:pointer;'], function (props) {
  return props.secondary && '#5cb85c';
});

exports.default = StyledButton;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Button/Button.js"); } } })();

/***/ }),

/***/ 619:
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

/***/ 620:
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

/***/ 621:
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

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.page = undefined;

var _Page = __webpack_require__(623);

var _Page2 = _interopRequireDefault(_Page);

var _Connect = __webpack_require__(639);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.page = _Page2.default;
exports.connect = _Connect2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); } } })();

/***/ }),

/***/ 623:
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

var _nextReduxWrapper = __webpack_require__(578);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _lodash = __webpack_require__(582);

var _fetch = __webpack_require__(627);

var _auth = __webpack_require__(589);

var _store = __webpack_require__(590);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js';


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/Page/Page.js"); } } })();

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;

var _isomorphicFetch = __webpack_require__(628);

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

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(579);

var _app = __webpack_require__(594);

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

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(567);

var _reduxForm = __webpack_require__(634);

var _app = __webpack_require__(594);

var _app2 = _interopRequireDefault(_app);

var _auth = __webpack_require__(589);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  auth: _auth2.default,
  app: _app2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); } } })();

/***/ }),

/***/ 639:
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

var _nextReduxWrapper = __webpack_require__(578);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(590);

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

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(641);


/***/ }),

/***/ 641:
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

var _layout = __webpack_require__(583);

var _app = __webpack_require__(594);

var _hocs = __webpack_require__(622);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/index.js?entry';
// import { Box } from 'grid-styled'

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
      return _react2.default.createElement(_layout.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Home page')), _react2.default.createElement(_layout.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Home page'), _react2.default.createElement(_layout.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Home'), _react2.default.createElement(_layout.Button, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Call saga'));
    }
  }]);

  return App;
}(_react.Component), _class2.propTypes = {
  sageDemoTest: _propTypes.PropTypes.func.isRequired
}, _temp2)) || _class) || _class);
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

/***/ })

},[640]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzPzljYmUzOWEiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzPzljYmUzOWEiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanM/OWNiZTM5YSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9tb2R1bGVzL2FwcC5qcz85Y2JlMzlhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRhaW5lci9Db250YWluZXIuanM/OWNiZTM5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzPzljYmUzOWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQnV0dG9uL0J1dHRvbi5qcz85Y2JlMzlhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L1RpdGxlL1RpdGxlLmpzPzljYmUzOWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0LmpzPzljYmUzOWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0SXRlbS5qcz85Y2JlMzlhIiwid2VicGFjazovLy8uL2hlbHBlcnMvaG9jcy9pbmRleC5qcz85Y2JlMzlhIiwid2VicGFjazovLy8uL2hlbHBlcnMvaG9jcy9QYWdlL1BhZ2UuanM/OWNiZTM5YSIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaC5qcz85Y2JlMzlhIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2EuanM/OWNiZTM5YSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzPzljYmUzOWEiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcz85Y2JlMzlhIiwid2VicGFjazovLy8uL3BhZ2VzPzdkOTI0NGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lci9Db250YWluZXInXG5leHBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcidcbmV4cG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xuZXhwb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUvVGl0bGUnXG5leHBvcnQgTGlzdCBmcm9tICcuL0xpc3QvTGlzdCdcbmV4cG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3QvTGlzdEl0ZW0nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsImNvbnN0IExPQURfVVNFUiA9ICduZXh0anMvYXBwL0xPQURfVVNFUidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcih1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9BRF9VU0VSLFxuICAgIHVzZXJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IG5leHRSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmltcG9ydCByb290U2FnYSBmcm9tICcuL3NhZ2EnXG5cbmNvbnN0IHJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKS5kZWZhdWx0XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxuICApXG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG4gIHJldHVybiBzdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlZHV4U2FnYShCYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB3aXRoUmVkdXgoaW5pdFN0b3JlKShuZXh0UmVkdXhTYWdhKEJhc2VDb21wb25lbnQpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc3RvcmUuanMiLCJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuLy8gQUNUSU9OIFRZUEVTXG5jb25zdCBTQUdBX0RFTU8gPSAnbmV4dGpzL2FwcC9TQUdBX0RFTU8nXG5jb25zdCBTQUdBX0RFTU9fU1VDQ0VTUyA9ICduZXh0anMvYXBwL1NBR0FfREVNT19TVUNDRVNTJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNhZ2FfZGVtbzoge1xuICAgIGlkOiAxMFxuICB9XG59XG5cbi8vIFJFRFVDRVJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNBR0FfREVNTzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzYWdhX2RlbW86IHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSBTQUdBX0RFTU9fU1VDQ0VTUzpcbiAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGRlbW8gc3VjY2VzcycpXG4gICAgICByZXR1cm4gc3RhdGVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VEZW1vVGVzdChpZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNBR0FfREVNTyxcbiAgICBpZFxuICB9XG59XG5cbi8vIFNBR0FcbmV4cG9ydCBmdW5jdGlvbiogcnVuVGVzdFdhdGNoZXIoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0FHQV9ERU1PLCBydW5UZXN0V29ya2VyKVxufVxuXG5mdW5jdGlvbiogcnVuVGVzdFdvcmtlcigpIHtcbiAgeWllbGQgcHV0KHtcbiAgICB0eXBlOiBTQUdBX0RFTU9fU1VDQ0VTU1xuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hcHAuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JpZC1zdHlsZWQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbmBcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXIvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PlxuICA8TGlzdD5cbiAgICA8TGlzdEl0ZW0+XG4gICAgICB7JyAnfTxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9MaXN0SXRlbT5cbiAgICA8TGlzdEl0ZW0+XG4gICAgICB7JyAnfTxMaW5rIGhyZWY9XCIvYWJvdXQ/aWQ9MTBcIiBhcz1cIi9hYm91dC8xMFwiIHByZWZldGNoPlxuICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0xpc3RJdGVtPlxuICA8L0xpc3Q+XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBvbkNsaWNrIH0pID0+XG4gIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufVxuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYmFja2dyb3VuZDogIzMzN2FiNztcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5zZWNvbmRhcnkgJiYgJyM1Y2I4NWMnfTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlNmRhNDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEJ1dHRvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvQnV0dG9uL0J1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT5cbiAgPGgxIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvaDE+XG5cblRpdGxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn1cblxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQoVGl0bGUpYFxuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbmBcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGl0bGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L1RpdGxlL1RpdGxlLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3QuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0xpc3QvTGlzdEl0ZW0uanMiLCJleHBvcnQgcGFnZSBmcm9tICcuL1BhZ2UvUGFnZSdcbmV4cG9ydCBjb25uZWN0IGZyb20gJy4vQ29ubmVjdC9Db25uZWN0J1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ3V0aWxzL2ZldGNoJ1xuXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJ3JlZHV4L3N0b3JlJ1xuXG5mdW5jdGlvbiBkZWNvcmF0b3IoKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChcbiAgICAgIGluaXRTdG9yZSxcbiAgICAgICh7IGF1dGggfSkgPT4gKHtcbiAgICAgICAgdXNlcjogYXV0aC51c2VyXG4gICAgICB9KSxcbiAgICAgIHsgbG9hZFVzZXIgfVxuICAgIClcbiAgICBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSB9KSB7XG4gICAgICAgIGlmIChnZXQoc3RvcmUuZ2V0U3RhdGUoKSwgJ2F1dGgudXNlci5pZCcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2xvYWRBdXRoJywge1xuICAgICAgICAgIHNlbGY6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2gobG9hZFVzZXIoanNvbikpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQYWdlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdG9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9oZWxwZXJzL2hvY3MvUGFnZS9QYWdlLmpzIiwiaW1wb3J0IGdldCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuLy8gY29uc3QgaXAgPSByZXF1aXJlKCdpcCcpXG5cbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuICBpZiAoIWlzU2VydmVyICYmIG9wdHMuc2VsZikge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHByb3RvY29sID0gb3B0cy5zZWxmID8gJ2h0dHA6Ly8nIDogJ2h0dHBzOi8vJ1xuICBjb25zdCBhcGlVcmwgPSBvcHRzLnNlbGYgPyAnbG9jYWxob3N0JyA6ICdBUElfVVJMJ1xuXG4gIGlmICghZGV2ICYmIG9wdHMuc2VsZikge1xuICAgIHByb3RvY29sID0gJ2h0dHBzOi8vJ1xuICB9XG5cbiAgaWYgKGlzU2VydmVyICYmIG9wdHMuc2VsZikge1xuICAgIHByb3RvY29sID0gJ2h0dHA6Ly8nXG4gIH1cblxuICByZXR1cm4gZ2V0KGAke3Byb3RvY29sfSR7YXBpVXJsfToke3Byb2Nlc3MuZW52LlBPUlR9JHt1cmx9YClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2ZldGNoLmpzIiwiaW1wb3J0IHsgYWxsLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQgeyBydW5UZXN0V2F0Y2hlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbY2FsbChydW5UZXN0V2F0Y2hlcildKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc2FnYS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nXG5cbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcCdcbmltcG9ydCBhdXRoIGZyb20gJy4vbW9kdWxlcy9hdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3JtOiBmb3JtUmVkdWNlcixcbiAgYXV0aCxcbiAgYXBwXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gZGVjb3JhdG9yKHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChpbml0U3RvcmUsIHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKVxuICAgIGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29ubmVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBpbXBvcnQgeyBCb3ggfSBmcm9tICdncmlkLXN0eWxlZCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIsIFRpdGxlLCBCdXR0b24gfSBmcm9tICdjb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IHNhZ2VEZW1vVGVzdCB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXBwJ1xuaW1wb3J0IHsgcGFnZSwgY29ubmVjdCB9IGZyb20gJ2hlbHBlcnMvaG9jcydcblxuQHBhZ2UoKVxuQGNvbm5lY3QobnVsbCwgeyBzYWdlRGVtb1Rlc3QgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2FnZURlbW9UZXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNhZ2VEZW1vVGVzdCgyMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkhvbWUgcGFnZTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFRpdGxlPkhvbWUgcGFnZTwvVGl0bGU+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGgyPkhvbWU8L2gyPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNhbGwgc2FnYTwvQnV0dG9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDV0E7QUFDQTs7Ozs7OztBQWxCQTtBQUNBO0FBQ0E7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUE7QUFDQTtBQXhCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ01BO0FBUUE7QUFDQTs7Ozs7Ozs7O0FBdkNBO0FBQ0E7OztBQXFDQTtBQUNBO0FBckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUFBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBTEE7O0FBQ0E7QUFBQTtBQUhBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQXlCQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBZEE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFEQTtBQW5CQTtBQUNBO0FBbUJBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQW9CQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFOQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFHQTtBQUNBOzs7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUFJQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFMQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7OztBQXJCQTtBQUVBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        