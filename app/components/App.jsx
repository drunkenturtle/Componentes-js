"use strict";

var React = require("react");
var commonService = require("../services/CommonService.jsx");

var App = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {
    };
  },
  componentWillMount: function() {
  },
  componentDidMount: function() {
    //console.log("# App->componentDidMount #");
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log("# App->componentWillReceiveProps #");
  },
  shouldComponentUpdate: function() {
    //console.log("# App->shouldComponentUpdate #");
    return true;
  },
  componentWillUpdate: function() {
    //console.log("# App->componentWillUpdate #");
  },
  componentDidUpdate: function() {
    //console.log("# App->componentDidUpdate #");
  },
  componentWillUnmount: function() {
    //console.log("# App->componentWillUnmount #");
  },
  render: function() {
    //console.log("# App->render #");

    return (
      <div>
        hola mundo 13!!
      </div>
    );
  }
});

module.exports = App;
