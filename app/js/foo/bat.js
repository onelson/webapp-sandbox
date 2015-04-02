/* global require, module */


var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

var Bat = React.createClass({
  render: () => {
    console.debug('render bat');
    return (<RaisedButton label="Bat"/>);
  }
});

module.exports = Bat;

