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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraggableReveal = function (_React$Component) {
  _inherits(DraggableReveal, _React$Component);

  function DraggableReveal(props) {
    _classCallCheck(this, DraggableReveal);

    var _this = _possibleConstructorReturn(this, (DraggableReveal.__proto__ || Object.getPrototypeOf(DraggableReveal)).call(this, props));

    _this.state = { rightPosition: 0 };

    _this.handle = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'handle' })
    );
    return _this;
  }

  _createClass(DraggableReveal, [{
    key: 'drawDraggableImages',
    value: function drawDraggableImages() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'draggable-photos' },
        _react2.default.createElement(
          'div',
          { className: 'draggable-photos__container' },
          _react2.default.createElement('img', { src: this.props.image1, alt: '' })
        ),
        _react2.default.createElement('div', {
          style: {
            width: 'calc(50% + ' + this.state.rightPosition + 'px)',
            backgroundImage: 'url(' + this.props.image2 + ')'
          },
          className: 'draggable-photos__container'
        }),
        _react2.default.createElement(
          _reactDraggable2.default,
          {
            handle: '.handle',
            ref: function ref(draggable) {
              _this2.draggable = draggable;
            },
            zIndex: 100,
            axis: 'x',
            onDrag: function onDrag() {
              return _this2.setState({ rightPosition: _this2.draggable.state.x });
            }
          },
          this.handle
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var content = void 0;
      if (this.props.image1 !== null && this.props.image2 !== null) {
        content = this.drawDraggableImages.bind(this)();
      }

      return content || null;
    }
  }]);

  return DraggableReveal;
}(_react2.default.Component);

exports.default = DraggableReveal;


DraggableReveal.defaultProps = { image1: null, image2: null };

DraggableReveal.propTypes = {
  image1: _propTypes2.default.string,
  image2: _propTypes2.default.string
};