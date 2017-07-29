webpackHotUpdate(6,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4zYWUzYmRiNGJlMTVhNWQ5Mjk2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JpZC1zdHlsZWQnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyLCBUaXRsZSwgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBzYWdlRGVtb1Rlc3QgfSBmcm9tICdyZWR1eC9tb2R1bGVzL2FwcCdcbmltcG9ydCB7IHBhZ2UsIGNvbm5lY3QgfSBmcm9tICdoZWxwZXJzL2hvY3MnXG5cbkBwYWdlKClcbkBjb25uZWN0KG51bGwsIHsgc2FnZURlbW9UZXN0IH0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNhZ2VEZW1vVGVzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zYWdlRGVtb1Rlc3QoMjApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Ib21lIHBhZ2U8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxUaXRsZT5Ib21lIHBhZ2U8L1RpdGxlPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DYWxsIHNhZ2E8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUxBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOzs7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBckJBO0FBRUE7QUFBQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=