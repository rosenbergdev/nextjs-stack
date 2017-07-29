
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(597);


/***/ }),

/***/ 597:
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

var _lodash = __webpack_require__(582);

var _layout = __webpack_require__(583);

var _hocs = __webpack_require__(622);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/about/index.js?entry';

var About = (_dec = (0, _hocs.page)(), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'About page')), _react2.default.createElement(_layout.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'About page'), _react2.default.createElement(_layout.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'About page'), 'route param: ', (0, _lodash.get)(this.props, 'url.query.id'));
    }
  }]);

  return About;
}(_react.Component), _class2.propTypes = {}, _temp)) || _class);
exports.default = About;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/pages/about/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/pages/about/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

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

/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hYm91dC9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzPzU0ZjBjMDQiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzPzU0ZjBjMDQiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanM/NTRmMGMwNCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9tb2R1bGVzL2FwcC5qcz81NGYwYzA0Iiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0PzU0ZjBjMDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQ29udGFpbmVyL0NvbnRhaW5lci5qcz81NGYwYzA0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanM/NTRmMGMwNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9CdXR0b24vQnV0dG9uLmpzP2UzZmU2NjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvVGl0bGUvVGl0bGUuanM/ZTNmZTY2NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3QuanM/ZTNmZTY2NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MaXN0L0xpc3RJdGVtLmpzP2UzZmU2NjUiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL2luZGV4LmpzP2UzZmU2NjUiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob2NzL1BhZ2UvUGFnZS5qcz9lM2ZlNjY1Iiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLmpzP2UzZmU2NjUiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYS5qcz9lM2ZlNjY1Iiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXIuanM/ZTNmZTY2NSIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hvY3MvQ29ubmVjdC9Db25uZWN0LmpzP2UzZmU2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lci9Db250YWluZXInXG5leHBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcidcbmV4cG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xuZXhwb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUvVGl0bGUnXG5leHBvcnQgTGlzdCBmcm9tICcuL0xpc3QvTGlzdCdcbmV4cG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3QvTGlzdEl0ZW0nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsImNvbnN0IExPQURfVVNFUiA9ICduZXh0anMvYXBwL0xPQURfVVNFUidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcih1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9BRF9VU0VSLFxuICAgIHVzZXJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IG5leHRSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmltcG9ydCByb290U2FnYSBmcm9tICcuL3NhZ2EnXG5cbmNvbnN0IHJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKS5kZWZhdWx0XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxuICApXG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG4gIHJldHVybiBzdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlZHV4U2FnYShCYXNlQ29tcG9uZW50KSB7XG4gIHJldHVybiB3aXRoUmVkdXgoaW5pdFN0b3JlKShuZXh0UmVkdXhTYWdhKEJhc2VDb21wb25lbnQpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc3RvcmUuanMiLCJpbXBvcnQgeyBhbGwsIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuLy8gQUNUSU9OIFRZUEVTXG5jb25zdCBTQUdBX0RFTU8gPSAnbmV4dGpzL2FwcC9TQUdBX0RFTU8nXG5jb25zdCBTQUdBX0RFTU9fU1VDQ0VTUyA9ICduZXh0anMvYXBwL1NBR0FfREVNT19TVUNDRVNTJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNhZ2FfZGVtbzoge1xuICAgIGlkOiAxMFxuICB9XG59XG5cbi8vIFJFRFVDRVJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNBR0FfREVNTzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzYWdhX2RlbW86IHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSBTQUdBX0RFTU9fU1VDQ0VTUzpcbiAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGRlbW8gc3VjY2VzcycpXG4gICAgICByZXR1cm4gc3RhdGVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VEZW1vVGVzdChpZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNBR0FfREVNTyxcbiAgICBpZFxuICB9XG59XG5cbi8vIFNBR0FcbmV4cG9ydCBmdW5jdGlvbiogcnVuVGVzdFdhdGNoZXIoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0FHQV9ERU1PLCBydW5UZXN0V29ya2VyKVxufVxuXG5mdW5jdGlvbiogcnVuVGVzdFdvcmtlcigpIHtcbiAgeWllbGQgcHV0KHtcbiAgICB0eXBlOiBTQUdBX0RFTU9fU1VDQ0VTU1xuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvbW9kdWxlcy9hcHAuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgVGl0bGUgfSBmcm9tICdjb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IHBhZ2UgfSBmcm9tICdoZWxwZXJzL2hvY3MnXG5cbkBwYWdlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+QWJvdXQgcGFnZTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFRpdGxlPkFib3V0IHBhZ2U8L1RpdGxlPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMj5BYm91dCBwYWdlPC9oMj5cbiAgICAgICAgcm91dGUgcGFyYW06IHtnZXQodGhpcy5wcm9wcywgJ3VybC5xdWVyeS5pZCcpfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hYm91dD9lbnRyeSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdncmlkLXN0eWxlZCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0NvbnRhaW5lci9Db250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IExpc3QsIExpc3RJdGVtIH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+XG4gIDxMaXN0PlxuICAgIDxMaXN0SXRlbT5cbiAgICAgIHsnICd9PExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD5cbiAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0xpc3RJdGVtPlxuICAgIDxMaXN0SXRlbT5cbiAgICAgIHsnICd9PExpbmsgaHJlZj1cIi9hYm91dD9pZD0xMFwiIGFzPVwiL2Fib3V0LzEwXCIgcHJlZmV0Y2g+XG4gICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTGlzdEl0ZW0+XG4gIDwvTGlzdD5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG9uQ2xpY2sgfSkgPT5cbiAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30+XG4gICAge2NoaWxkcmVufVxuICA8L2J1dHRvbj5cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnXG59XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBiYWNrZ3JvdW5kOiAjMzM3YWI3O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnNlY29uZGFyeSAmJiAnIzVjYjg1Yyd9O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmU2ZGE0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQnV0dG9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9CdXR0b24vQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFRpdGxlID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PlxuICA8aDEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9oMT5cblxuVGl0bGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cblRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufVxuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZChUaXRsZSlgXG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRUaXRsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvVGl0bGUvVGl0bGUuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0xpc3QvTGlzdC5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGlzdC9MaXN0SXRlbS5qcyIsImV4cG9ydCBwYWdlIGZyb20gJy4vUGFnZS9QYWdlJ1xuZXhwb3J0IGNvbm5lY3QgZnJvbSAnLi9Db25uZWN0L0Nvbm5lY3QnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9oZWxwZXJzL2hvY3MvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAndXRpbHMvZmV0Y2gnXG5cbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hdXRoJ1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAncmVkdXgvc3RvcmUnXG5cbmZ1bmN0aW9uIGRlY29yYXRvcigpIHtcbiAgcmV0dXJuIENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgICBAd2l0aFJlZHV4KFxuICAgICAgaW5pdFN0b3JlLFxuICAgICAgKHsgYXV0aCB9KSA9PiAoe1xuICAgICAgICB1c2VyOiBhdXRoLnVzZXJcbiAgICAgIH0pLFxuICAgICAgeyBsb2FkVXNlciB9XG4gICAgKVxuICAgIGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHN0b3JlIH0pIHtcbiAgICAgICAgaWYgKGdldChzdG9yZS5nZXRTdGF0ZSgpLCAnYXV0aC51c2VyLmlkJykpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvbG9hZEF1dGgnLCB7XG4gICAgICAgICAgc2VsZjogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChsb2FkVXNlcihqc29uKSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFBhZ2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0b3JcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hlbHBlcnMvaG9jcy9QYWdlL1BhZ2UuanMiLCJpbXBvcnQgZ2V0IGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG4vLyBjb25zdCBpcCA9IHJlcXVpcmUoJ2lwJylcblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRzID0ge30pIHtcbiAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG4gIGlmICghaXNTZXJ2ZXIgJiYgb3B0cy5zZWxmKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgcHJvdG9jb2wgPSBvcHRzLnNlbGYgPyAnaHR0cDovLycgOiAnaHR0cHM6Ly8nXG4gIGNvbnN0IGFwaVVybCA9IG9wdHMuc2VsZiA/ICdsb2NhbGhvc3QnIDogJ0FQSV9VUkwnXG5cbiAgaWYgKCFkZXYgJiYgb3B0cy5zZWxmKSB7XG4gICAgcHJvdG9jb2wgPSAnaHR0cHM6Ly8nXG4gIH1cblxuICBpZiAoaXNTZXJ2ZXIgJiYgb3B0cy5zZWxmKSB7XG4gICAgcHJvdG9jb2wgPSAnaHR0cDovLydcbiAgfVxuXG4gIHJldHVybiBnZXQoYCR7cHJvdG9jb2x9JHthcGlVcmx9OiR7cHJvY2Vzcy5lbnYuUE9SVH0ke3VybH1gKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZmV0Y2guanMiLCJpbXBvcnQgeyBhbGwsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCB7IHJ1blRlc3RXYXRjaGVyIH0gZnJvbSAncmVkdXgvbW9kdWxlcy9hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtjYWxsKHJ1blRlc3RXYXRjaGVyKV0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zYWdhLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSdcblxuaW1wb3J0IGFwcCBmcm9tICcuL21vZHVsZXMvYXBwJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi9tb2R1bGVzL2F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvcm06IGZvcm1SZWR1Y2VyLFxuICBhdXRoLFxuICBhcHBcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9yZWR1Y2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJ3JlZHV4L3N0b3JlJ1xuXG5mdW5jdGlvbiBkZWNvcmF0b3Ioc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgICBAd2l0aFJlZHV4KGluaXRTdG9yZSwgc3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpXG4gICAgY2xhc3MgQ29ubmVjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDb25uZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdG9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9oZWxwZXJzL2hvY3MvQ29ubmVjdC9Db25uZWN0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNXQTtBQUNBOzs7Ozs7O0FBbEJBO0FBQ0E7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJQTtBQUNBO0FBeEJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7QUFRQTtBQUNBOzs7Ozs7Ozs7QUF2Q0E7QUFDQTs7O0FBcUNBO0FBQ0E7QUFyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFMQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTs7QUFFQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTs7QUFHQTtBQUVBO0FBSEE7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQVhBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUxBOztBQUNBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUF5QkE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQWRBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBREE7QUFuQkE7QUFDQTtBQW1CQTtBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFvQkE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBTkE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBR0E7QUFDQTs7O0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBSUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        