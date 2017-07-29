
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(530);


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(55);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = __webpack_require__(153);

var _keys2 = _interopRequireDefault(_keys);

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

var _get3 = __webpack_require__(531);

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(535);

var _document2 = _interopRequireDefault(_document);

var _styledComponents = __webpack_require__(544);

var _reactHelmet = __webpack_require__(550);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martin/Projects/nextjs-stack/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }));
      var styleTags = sheet.getStyleElement();

      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.helmetJsx, this.helmetHeadComponents, styleTags), _react2.default.createElement('body', (0, _extends3.default)({ className: 'custom_class' }, this.helmetBodyAttrComponents, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), this.props.customValue, main, _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })));
    }
  }, {
    key: 'helmetHtmlAttrComponents',

    // should render on <html>
    get: function get() {
      return this.props.helmet.htmlAttributes.toComponent();
    }

    // should render on <body>

  }, {
    key: 'helmetBodyAttrComponents',
    get: function get() {
      return this.props.helmet.bodyAttributes.toComponent();
    }

    // should render on <head>

  }, {
    key: 'helmetHeadComponents',
    get: function get() {
      var _this2 = this;

      return (0, _keys2.default)(this.props.helmet).filter(function (el) {
        return el !== 'htmlAttributes' && el !== 'bodyAttributes';
      }).map(function (el) {
        return _this2.props.helmet[el].toComponent();
      });
    }
  }, {
    key: 'helmetJsx',
    get: function get() {
      return _react2.default.createElement(_reactHelmet2.default, {
        htmlAttributes: { lang: 'en' },
        title: 'Next app!',
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _get2;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var documentProps;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (_get2 = (0, _get4.default)(MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument), 'getInitialProps', this)).call.apply(_get2, [this].concat(args));

              case 2:
                documentProps = _context.sent;
                return _context.abrupt('return', (0, _extends3.default)({}, documentProps, { helmet: _reactHelmet2.default.renderStatic() }));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/martin/Projects/nextjs-stack/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/martin/Projects/nextjs-stack/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[529]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/NWM5YThmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBkb2N1bWVudFByb3BzID0gYXdhaXQgc3VwZXIuZ2V0SW5pdGlhbFByb3BzKC4uLmFyZ3MpXG5cbiAgICByZXR1cm4geyAuLi5kb2N1bWVudFByb3BzLCBoZWxtZXQ6IEhlbG1ldC5yZW5kZXJTdGF0aWMoKSB9XG4gIH1cblxuICAvLyBzaG91bGQgcmVuZGVyIG9uIDxodG1sPlxuICBnZXQgaGVsbWV0SHRtbEF0dHJDb21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpXG4gIH1cblxuICAvLyBzaG91bGQgcmVuZGVyIG9uIDxib2R5PlxuICBnZXQgaGVsbWV0Qm9keUF0dHJDb21wb25lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlbG1ldC5ib2R5QXR0cmlidXRlcy50b0NvbXBvbmVudCgpXG4gIH1cblxuICAvLyBzaG91bGQgcmVuZGVyIG9uIDxoZWFkPlxuICBnZXQgaGVsbWV0SGVhZENvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuaGVsbWV0KVxuICAgICAgLmZpbHRlcihlbCA9PiBlbCAhPT0gJ2h0bWxBdHRyaWJ1dGVzJyAmJiBlbCAhPT0gJ2JvZHlBdHRyaWJ1dGVzJylcbiAgICAgIC5tYXAoZWwgPT4gdGhpcy5wcm9wcy5oZWxtZXRbZWxdLnRvQ29tcG9uZW50KCkpXG4gIH1cblxuICBnZXQgaGVsbWV0SnN4KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVsbWV0XG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7IGxhbmc6ICdlbicgfX1cbiAgICAgICAgdGl0bGU9XCJOZXh0IGFwcCFcIlxuICAgICAgICBtZXRhPXtbXG4gICAgICAgICAgeyBuYW1lOiAndmlld3BvcnQnLCBjb250ZW50OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIH1cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKVxuICAgIGNvbnN0IG1haW4gPSBzaGVldC5jb2xsZWN0U3R5bGVzKDxNYWluIC8+KVxuICAgIGNvbnN0IHN0eWxlVGFncyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHt0aGlzLmhlbG1ldEpzeH1cbiAgICAgICAgICB7dGhpcy5oZWxtZXRIZWFkQ29tcG9uZW50c31cbiAgICAgICAgICB7c3R5bGVUYWdzfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5IGNsYXNzTmFtZT1cImN1c3RvbV9jbGFzc1wiIHsuLi50aGlzLmhlbG1ldEJvZHlBdHRyQ29tcG9uZW50c30+XG4gICAgICAgICAge3RoaXMucHJvcHMuY3VzdG9tVmFsdWV9XG4gICAgICAgICAge21haW59XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFxQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBSUE7QUFKQTtBQUFBOzs7QUE1Q0E7QUFDQTs7QUFDQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFIQTtBQVFBO0FBUkE7QUFDQTs7Ozs7Ozs7QUExQkE7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        