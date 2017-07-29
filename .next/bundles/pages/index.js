
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = exports.Title = exports.Button = exports.Header = exports.Container = undefined;

var _Container2 = __webpack_require__(572);

var _Container3 = _interopRequireDefault(_Container2);

var _Header2 = __webpack_require__(588);

var _Header3 = _interopRequireDefault(_Header2);

var _Button2 = __webpack_require__(592);

var _Button3 = _interopRequireDefault(_Button2);

var _Title2 = __webpack_require__(593);

var _Title3 = _interopRequireDefault(_Title2);

var _List2 = __webpack_require__(594);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(595);

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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(544);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gridStyled = __webpack_require__(573);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = (0, _styledComponents2.default)(_gridStyled.Box).withConfig({
  displayName: 'Container__Container',
  componentId: 'ewafzr-0'
})(['max-width:1024px;margin-left:auto;margin-right:auto;']);

exports.default = Container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/components/layout/Container/Container.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(589);

var _link2 = _interopRequireDefault(_link);

var _ = __webpack_require__(566);

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

/***/ 592:
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

/***/ 593:
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

/***/ 594:
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

/***/ 595:
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

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.loadUser = loadUser;
exports.runLoadUserWatcher = runLoadUserWatcher;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(77);

var _extends3 = _interopRequireDefault(_extends2);

var _effects = __webpack_require__(605);

var _fetch = __webpack_require__(616);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [runLoadUserWorker, runLoadUserWatcher].map(_regenerator2.default.mark);

var LOAD_USER = 'nextjs/app/LOAD_USER';
var LOAD_USER_SUCCESS = 'nextjs/app/LOAD_USER_SUCCESS';

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

function runLoadUserWatcher() {
  return _regenerator2.default.wrap(function runLoadUserWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(LOAD_USER, runLoadUserWorker);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/modules/auth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/modules/auth.js"); } } })();

/***/ }),

/***/ 610:
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

var _effects = __webpack_require__(605);

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

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetch;

var _isomorphicFetch = __webpack_require__(625);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(627).polyfill();
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

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;
exports.withReduxSaga = withReduxSaga;

var _redux = __webpack_require__(602);

var _reduxDevtoolsExtension = __webpack_require__(634);

var _nextReduxWrapper = __webpack_require__(611);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(635);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = __webpack_require__(621);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _saga = __webpack_require__(636);

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = __webpack_require__(637).default;

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

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(624);


/***/ }),

/***/ 624:
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

var _gridStyled = __webpack_require__(573);

var _layout = __webpack_require__(566);

var _app = __webpack_require__(610);

var _auth = __webpack_require__(607);

var _hocs = __webpack_require__(629);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/index.js?entry';

var App = (_dec = (0, _hocs.page)(), _dec2 = (0, _hocs.connect)(function (_ref) {
  var auth = _ref.auth;
  return {
    user: auth.user
  };
}, { sageDemoTest: _app.sageDemoTest }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
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
    }, _this.handleLoadAuth = function () {
      _this.props.loadUser(20);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Home page')), _react2.default.createElement(_layout.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Home page'), _react2.default.createElement(_layout.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Home'), this.props.user.name, _react2.default.createElement(_gridStyled.Box, { mb: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_layout.Button, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Call saga')), _react2.default.createElement(_layout.Button, { onClick: this.handleLoadAuth, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Load user (call session)'));
    }
  }]);

  return App;
}(_react.Component), _class2.propTypes = {
  sageDemoTest: _propTypes.PropTypes.func.isRequired,
  user: _propTypes.PropTypes.object,
  loadUser: _propTypes.PropTypes.func.isRequired
}, _class2.defaultProps = {
  user: {}
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

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.page = undefined;

var _Page = __webpack_require__(630);

var _Page2 = _interopRequireDefault(_Page);

var _Connect = __webpack_require__(643);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.page = _Page2.default;
exports.connect = _Connect2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/helpers/hocs/index.js"); } } })();

/***/ }),

/***/ 630:
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

var _nextReduxWrapper = __webpack_require__(611);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _lodash = __webpack_require__(571);

var _fetch = __webpack_require__(616);

var _fetch2 = _interopRequireDefault(_fetch);

var _auth = __webpack_require__(607);

var _store = __webpack_require__(620);

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
              lineNumber: 39
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
                    return (0, _fetch2.default)('/loadAuth', {
                      self: true
                    });

                  case 4:
                    res = _context.sent;
                    _context.prev = 5;
                    _context.next = 8;
                    return res.json();

                  case 8:
                    json = _context.sent;

                    if (json) {
                      store.dispatch((0, _auth.loadUser)(json));
                    }
                    _context.next = 15;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](5);

                    console.log('err', _context.t0);

                  case 15:
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

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(605);

var _app = __webpack_require__(610);

var _auth = __webpack_require__(607);

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

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(602);

var _reduxForm = __webpack_require__(638);

var _app = __webpack_require__(610);

var _app2 = _interopRequireDefault(_app);

var _auth = __webpack_require__(607);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  auth: _auth2.default,
  app: _app2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/redux/reducer.js"); } } })();

/***/ }),

/***/ 643:
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

var _nextReduxWrapper = __webpack_require__(611);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(620);

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

},[623]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzPzVkYzJhMDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGFpbmVyL0NvbnRhaW5lci5qcz81ZGMyYTA2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanM/NWRjMmEwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9CdXR0b24vQnV0dG9uLmpzPzVkYzJhMDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvVGl0bGUvVGl0bGUuanM/NWRjMmEwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3QuanM/NWRjMmEwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3RJdGVtLmpzPzVkYzJhMDYiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzPzVkYzJhMDYiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hcHAuanM/NWRjMmEwNiIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaC5qcz81ZGMyYTA2Iiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzPzVkYzJhMDYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NWRjMmEwNiIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpPzVkYzJhMDYiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL2luZGV4LmpzPzk5OGI4MDIiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL1BhZ2UvUGFnZS5qcz85OThiODAyIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2EuanM/OTk4YjgwMiIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzPzk5OGI4MDIiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcz85OThiODAyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXIvQ29udGFpbmVyJ1xuZXhwb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9IZWFkZXInXG5leHBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uL0J1dHRvbidcbmV4cG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlL1RpdGxlJ1xuZXhwb3J0IExpc3QgZnJvbSAnLi9MaXN0L0xpc3QnXG5leHBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0L0xpc3RJdGVtJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JpZC1zdHlsZWQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbmBcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9Db250YWluZXIvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PlxuICA8TGlzdD5cbiAgICA8TGlzdEl0ZW0+XG4gICAgICB7JyAnfTxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9MaXN0SXRlbT5cbiAgICA8TGlzdEl0ZW0+XG4gICAgICB7JyAnfTxMaW5rIGhyZWY9XCIvYWJvdXQ/aWQ9MTBcIiBhcz1cIi9hYm91dC8xMFwiIHByZWZldGNoPlxuICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0xpc3RJdGVtPlxuICA8L0xpc3Q+XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBvbkNsaWNrIH0pID0+XG4gIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufVxuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgYmFja2dyb3VuZDogIzMzN2FiNztcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5zZWNvbmRhcnkgJiYgJyM1Y2I4NWMnfTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlNmRhNDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEJ1dHRvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvQnV0dG9uL0J1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBUaXRsZSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT5cbiAgPGgxIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvaDE+XG5cblRpdGxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn1cblxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQoVGl0bGUpYFxuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbmBcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGl0bGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L1RpdGxlL1RpdGxlLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3QuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0xpc3QvTGlzdEl0ZW0uanMiLCJpbXBvcnQgeyBwdXQsIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAndXRpbHMvZmV0Y2gnXG5cbmNvbnN0IExPQURfVVNFUiA9ICduZXh0anMvYXBwL0xPQURfVVNFUidcbmNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ25leHRqcy9hcHAvTE9BRF9VU0VSX1NVQ0NFU1MnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGxvYWRlZDogZmFsc2UsXG4gIHVzZXI6IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPQURfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAuLi5hY3Rpb24udXNlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcih1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9BRF9VU0VSLFxuICAgIHVzZXJcbiAgfVxufVxuXG4vLyBTQUdBXG5mdW5jdGlvbiogcnVuTG9hZFVzZXJXb3JrZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignZXJyb3InLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHJ1bkxvYWRVc2VyV2F0Y2hlcigpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVIsIHJ1bkxvYWRVc2VyV29ya2VyKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG4vLyBBQ1RJT04gVFlQRVNcbmNvbnN0IFNBR0FfREVNTyA9ICduZXh0anMvYXBwL1NBR0FfREVNTydcbmNvbnN0IFNBR0FfREVNT19TVUNDRVNTID0gJ25leHRqcy9hcHAvU0FHQV9ERU1PX1NVQ0NFU1MnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2FnYV9kZW1vOiB7XG4gICAgaWQ6IDEwXG4gIH1cbn1cblxuLy8gUkVEVUNFUlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0FHQV9ERU1POlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNhZ2FfZGVtbzoge1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBjYXNlIFNBR0FfREVNT19TVUNDRVNTOlxuICAgICAgY29uc29sZS5sb2coJ3NhZ2EgZGVtbyBzdWNjZXNzJylcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG4vLyBBQ1RJT05TXG5leHBvcnQgZnVuY3Rpb24gc2FnZURlbW9UZXN0KGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0FHQV9ERU1PLFxuICAgIGlkXG4gIH1cbn1cblxuLy8gU0FHQVxuZnVuY3Rpb24qIHJ1blRlc3RXb3JrZXIoKSB7XG4gIHlpZWxkIHB1dCh7XG4gICAgdHlwZTogU0FHQV9ERU1PX1NVQ0NFU1NcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBydW5UZXN0V2F0Y2hlcigpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTQUdBX0RFTU8sIHJ1blRlc3RXb3JrZXIpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9tb2R1bGVzL2FwcC5qcyIsImltcG9ydCBnZXQgZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxucmVxdWlyZSgnZXM2LXByb21pc2UnKS5wb2x5ZmlsbCgpXG4vLyBjb25zdCBpcCA9IHJlcXVpcmUoJ2lwJylcblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaCh1cmwsIG9wdHMgPSB7fSkge1xuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbiAgaWYgKCFpc1NlcnZlciAmJiBvcHRzLnNlbGYpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBwcm90b2NvbCA9IG9wdHMuc2VsZiA/ICdodHRwOi8vJyA6ICdodHRwczovLydcbiAgY29uc3QgYXBpVXJsID0gb3B0cy5zZWxmID8gJ2xvY2FsaG9zdCcgOiAnQVBJX1VSTCdcblxuICBpZiAoIWRldiAmJiBvcHRzLnNlbGYpIHtcbiAgICBwcm90b2NvbCA9ICdodHRwczovLydcbiAgfVxuXG4gIGlmIChpc1NlcnZlciAmJiBvcHRzLnNlbGYpIHtcbiAgICBwcm90b2NvbCA9ICdodHRwOi8vJ1xuICB9XG5cbiAgcmV0dXJuIGdldChgJHtwcm90b2NvbH0ke2FwaVVybH06JHtwcm9jZXNzLmVudi5QT1JUfSR7dXJsfWApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mZXRjaC5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCBuZXh0UmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VyJykuZGVmYXVsdFxuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbiAgKVxuXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxuICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSZWR1eFNhZ2EoQmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4gd2l0aFJlZHV4KGluaXRTdG9yZSkobmV4dFJlZHV4U2FnYShCYXNlQ29tcG9uZW50KSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJveCB9IGZyb20gJ2dyaWQtc3R5bGVkJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgVGl0bGUsIEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgc2FnZURlbW9UZXN0IH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hcHAnXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcbmltcG9ydCB7IHBhZ2UsIGNvbm5lY3QgfSBmcm9tICdoZWxwZXJzL2hvY3MnXG5cbkBwYWdlKClcbkBjb25uZWN0KFxuICAoeyBhdXRoIH0pID0+ICh7XG4gICAgdXNlcjogYXV0aC51c2VyXG4gIH0pLFxuICB7IHNhZ2VEZW1vVGVzdCB9XG4pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNhZ2VEZW1vVGVzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvYWRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHVzZXI6IHt9XG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNhZ2VEZW1vVGVzdCgyMClcbiAgfVxuXG4gIGhhbmRsZUxvYWRBdXRoID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubG9hZFVzZXIoMjApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Ib21lIHBhZ2U8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxUaXRsZT5Ib21lIHBhZ2U8L1RpdGxlPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgICAge3RoaXMucHJvcHMudXNlci5uYW1lfVxuICAgICAgICA8Qm94IG1iPXsxMH0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DYWxsIHNhZ2E8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVMb2FkQXV0aH0+TG9hZCB1c2VyIChjYWxsIHNlc3Npb24pPC9CdXR0b24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdmVydHggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA2Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiZXhwb3J0IHBhZ2UgZnJvbSAnLi9QYWdlL1BhZ2UnXG5leHBvcnQgY29ubmVjdCBmcm9tICcuL0Nvbm5lY3QvQ29ubmVjdCdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hlbHBlcnMvaG9jcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGZldGNoIGZyb20gJ3V0aWxzL2ZldGNoJ1xuXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJ3JlZHV4L3N0b3JlJ1xuXG5mdW5jdGlvbiBkZWNvcmF0b3IoKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChcbiAgICAgIGluaXRTdG9yZSxcbiAgICAgICh7IGF1dGggfSkgPT4gKHtcbiAgICAgICAgdXNlcjogYXV0aC51c2VyXG4gICAgICB9KSxcbiAgICAgIHsgbG9hZFVzZXIgfVxuICAgIClcbiAgICBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSB9KSB7XG4gICAgICAgIGlmIChnZXQoc3RvcmUuZ2V0U3RhdGUoKSwgJ2F1dGgudXNlci5pZCcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2xvYWRBdXRoJywge1xuICAgICAgICAgIHNlbGY6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgaWYgKGpzb24pIHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGxvYWRVc2VyKGpzb24pKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyJywgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUGFnZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL1BhZ2UvUGFnZS5qcyIsImltcG9ydCB7IGFsbCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IHsgcnVuVGVzdFdhdGNoZXIgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2FwcCdcbmltcG9ydCB7IHJ1bkxvYWRVc2VyV2F0Y2hlciB9IGZyb20gJ3JlZHV4L21vZHVsZXMvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2NhbGwocnVuVGVzdFdhdGNoZXIpLCBjYWxsKHJ1bkxvYWRVc2VyV2F0Y2hlcildKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc2FnYS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nXG5cbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcCdcbmltcG9ydCBhdXRoIGZyb20gJy4vbW9kdWxlcy9hdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3JtOiBmb3JtUmVkdWNlcixcbiAgYXV0aCxcbiAgYXBwXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICdyZWR1eC9zdG9yZSdcblxuZnVuY3Rpb24gZGVjb3JhdG9yKHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gICAgQHdpdGhSZWR1eChpbml0U3RvcmUsIHN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKVxuICAgIGNsYXNzIENvbm5lY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29ubmVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaGVscGVycy9ob2NzL0Nvbm5lY3QvQ29ubmVjdC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDc0JBO0FBbUJBO0FBQ0E7Ozs7Ozs7OztBQXJEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUF1Q0E7QUFDQTtBQXZDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFFQTs7QUFFQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBY0E7QUFDQTs7Ozs7Ozs7O0FBN0NBO0FBQ0E7OztBQXFDQTtBQUNBO0FBckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUFBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7O0FBRUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQXhCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQVFBO0FBTEE7O0FBQ0E7QUFBQTtBQUZBOzs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBR0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFuQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFMQTs7QUFDQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBNkJBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBVkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFkQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQURBO0FBbkJBO0FBQ0E7QUFtQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF3QkE7QUFDQTtBQURBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQXdCQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBSUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        