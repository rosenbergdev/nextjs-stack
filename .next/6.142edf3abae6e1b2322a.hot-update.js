webpackHotUpdate(6,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4xNDJlZGYzYWJhZTZlMWIyMzIyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVkdXgvbW9kdWxlcy9hdXRoLmpzPzk5OGI4MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ3V0aWxzL2ZldGNoJ1xuXG5jb25zdCBMT0FEX1VTRVIgPSAnbmV4dGpzL2FwcC9MT0FEX1VTRVInXG5jb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICduZXh0anMvYXBwL0xPQURfVVNFUl9TVUNDRVNTJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBsb2FkZWQ6IGZhbHNlLFxuICB1c2VyOiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgLi4uYWN0aW9uLnVzZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXIodXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPQURfVVNFUixcbiAgICB1c2VyXG4gIH1cbn1cblxuLy8gU0FHQVxuZnVuY3Rpb24qIHJ1bkxvYWRVc2VyV29ya2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIHVzZXI6IGFjdGlvbi51c2VyXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ2Vycm9yJywgZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBydW5Mb2FkVXNlcldhdGNoZXIoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSLCBydW5Mb2FkVXNlcldvcmtlcilcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L21vZHVsZXMvYXV0aC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBaUNBO0FBbUJBO0FBQ0E7Ozs7Ozs7OztBQXJEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUF1Q0E7QUFDQTtBQXZDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFFQTs7QUFFQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==