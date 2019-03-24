'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById('app'));

//import './utils.js';
/*import subtract, {square, add} from './utils.js';
import isSenior, {isAdult, canDrink} from './person.js';
//console.log("app.js !!!");
console.log(square(5));
console.log(add(100,23));
console.log(subtract(100,23));
console.log(isAdult(15));
console.log(canDrink(40));
console.log(isSenior(67));*/
/*const User = (props) =>{
  return(
  <div>
    <p>Name: {props.name}</p>

    <p>Age: {props.age}</p>
  </div>
  );
};*/
//babel-cli:to run babel frm cmd
//babel-core:to run babel from tools like webpack
//babel-loader:teaches webpack to handle babel its a plugin
