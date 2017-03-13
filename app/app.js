"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
//components
var App = require("./components/App.jsx");

window.initApp = function() {
  console.log("# initApp Ver. 1.0 #");
  document.querySelector("body").style.width = window.innerWidth + "px";
  document.querySelector("body").style.height = window.innerHeight + "px";
  ReactDOM.render(<App />, document.getElementById("app"));
};
