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

var RightSide = function (_React$Component) {
  _inherits(RightSide, _React$Component);

  function RightSide() {
    _classCallCheck(this, RightSide);

    return _possibleConstructorReturn(this, (RightSide.__proto__ || Object.getPrototypeOf(RightSide)).apply(this, arguments));
  }

  _createClass(RightSide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.rightVimeo) {
        this.videoDiv = document.createElement('DIV');
        this.rightVimeo.appendChild(this.videoDiv);

        this.player = new _player2.default(this.videoDiv, {
          id: this.props.content.replace('-vimeo', '')
        });

        this.addPlayerListeners.bind(this)();
      }
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      switch (this.props.startAt) {
        case 'center':
          return 'calc(50% + ' + this.props.rightPosition + 'px)';
        case 'left':
          return 'calc(100% - ' + this.props.rightPosition + 'px)';
        default:
          return '0';
      }
    }
  }, {
    key: 'addPlayerListeners',
    value: function addPlayerListeners() {
      var _this2 = this;

      this.player.on('loaded', function () {
        _this2.player.element.style.opacity = 1;
      });
      this.player.on('loaded', function () {
        (0, _resizeIframe2.default)(_this2.player.element);
      });

      window.addEventListener('resize', (0, _debounce2.default)(function () {
        return (0, _resizeIframe2.default)(_this2.player.element);
      }, 200));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.content.indexOf('-vimeo') === -1) {
        var width = this.setWidth();
        return _react2.default.createElement('div', {
          style: { width: width, backgroundImage: 'url(' + this.props.content + ')' },
          className: 'draggable-photos__container',
          ref: function ref(div) {
            _this3.right = div;
          }
        });
      }

      return _react2.default.createElement('div', {
        style: { width: 'calc(50% + ' + this.props.rightPosition + 'px)' },
        className: 'draggable-photos__container',
        ref: function ref(div) {
          _this3.rightVimeo = div;
        }
      });
    }
  }]);

  return RightSide;
}(_react2.default.Component);

exports.default = RightSide;


RightSide.propTypes = {
  content: _propTypes2.default.string.isRequired,
  rightPosition: _propTypes2.default.number.isRequired,
  startAt: _propTypes2.default.string.isRequired
};