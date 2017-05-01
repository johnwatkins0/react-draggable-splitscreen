'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _player = require('@vimeo/player');

var _player2 = _interopRequireDefault(_player);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeIframe = require('./utils/resize-iframe');

var _resizeIframe2 = _interopRequireDefault(_resizeIframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftSide = function (_React$Component) {
  _inherits(LeftSide, _React$Component);

  function LeftSide() {
    _classCallCheck(this, LeftSide);

    return _possibleConstructorReturn(this, (LeftSide.__proto__ || Object.getPrototypeOf(LeftSide)).apply(this, arguments));
  }

  _createClass(LeftSide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.leftVimeo) {
        this.videoDiv = document.createElement('DIV');
        this.leftVimeo.appendChild(this.videoDiv);

        this.player = new _player2.default(this.videoDiv, {
          id: this.props.content.replace('-vimeo', '')
        });

        this.addPlayerListeners.bind(this)();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.rightPosition === this.props.rightPosition) {
        return false;
      }

      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.rightPosition > (this.props.width || 200) / 2) {
        this.player.getPaused().then(function (paused) {
          if (paused === true) {
            _this2.player.play();
          }
        });
      } else {
        this.player.getPaused().then(function (paused) {
          if (paused === false) {
            _this2.player.pause();
          }
        });
      }
    }
  }, {
    key: 'addPlayerListeners',
    value: function addPlayerListeners() {
      var _this3 = this;

      this.player.on('loaded', this.props.reveal);

      this.player.on('loaded', function () {
        (0, _resizeIframe2.default)(_this3.player.element);
      });

      window.addEventListener('resize', (0, _debounce2.default)(function () {
        return (0, _resizeIframe2.default)(_this3.player.element);
      }, 200));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (this.props.content.indexOf('-vimeo') === -1) {
        return _react2.default.createElement(
          'div',
          {
            ref: function ref(div) {
              _this4.left = div;
            },
            className: 'draggable-photos__container'
          },
          _react2.default.createElement('img', { src: this.props.content, alt: '', onLoad: this.props.reveal })
        );
      }

      return _react2.default.createElement('div', {
        className: 'draggable-photos__container',
        ref: function ref(div) {
          _this4.leftVimeo = div;
        }
      });
    }
  }]);

  return LeftSide;
}(_react2.default.Component);

exports.default = LeftSide;


LeftSide.propTypes = {
  content: _propTypes2.default.string.isRequired,
  reveal: _propTypes2.default.func.isRequired,
  rightPosition: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired
};