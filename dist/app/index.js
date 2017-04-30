'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _leftSide = require('./left-side');

var _leftSide2 = _interopRequireDefault(_leftSide);

var _rightSide = require('./right-side');

var _rightSide2 = _interopRequireDefault(_rightSide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraggableReveal = function (_React$Component) {
  _inherits(DraggableReveal, _React$Component);

  function DraggableReveal(props) {
    _classCallCheck(this, DraggableReveal);

    var _this = _possibleConstructorReturn(this, (DraggableReveal.__proto__ || Object.getPrototypeOf(DraggableReveal)).call(this, props));

    _this.state = { rightPosition: 0, width: 0 };

    _this.handle = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', {
        className: 'handle' + (_this.props['start-at'] ? ' handle--' + _this.props['start-at'] : '')
      })
    );

    _this.handleDrag = _this.handleDrag.bind(_this);
    _this.width = 0;
    return _this;
  }

  _createClass(DraggableReveal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.width = this.container.clientWidth;
    }
  }, {
    key: 'handleDrag',
    value: function handleDrag() {
      if (this.draggable) {
        this.setState({ rightPosition: this.draggable.state.x });
      }
    }
  }, {
    key: 'drawDraggableImages',
    value: function drawDraggableImages() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(div) {
            _this2.container = div;
          },
          className: 'draggable-photos draggable-photos--' + this.props['start-at']
        },
        _react2.default.createElement(_leftSide2.default, {
          content: this.props.left,
          rightPosition: this.state.rightPosition,
          startAt: this.props['start-at'],
          width: this.width
        }),
        _react2.default.createElement(_rightSide2.default, {
          content: this.props.right,
          rightPosition: this.state.rightPosition,
          startAt: this.props['start-at'],
          width: this.width
        }),
        _react2.default.createElement(
          _reactDraggable2.default,
          {
            bounds: { left: 0, right: this.width },
            handle: '.handle',
            ref: function ref(draggable) {
              _this2.draggable = draggable;
            },
            zIndex: 100,
            axis: 'x',
            onDrag: this.handleDrag
          },
          this.handle
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var content = void 0;
      if (this.props.left !== null && this.props.left !== null) {
        content = this.drawDraggableImages.bind(this)();
      }

      return content || null;
    }
  }]);

  return DraggableReveal;
}(_react2.default.Component);

exports.default = DraggableReveal;


DraggableReveal.defaultProps = {
  left: null,
  right: null,
  'start-at': 'middle'
};

DraggableReveal.propTypes = {
  left: _propTypes2.default.string,
  right: _propTypes2.default.string,
  'start-at': _propTypes2.default.string
};