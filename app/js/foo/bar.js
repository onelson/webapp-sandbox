/* global require, module */

var React = require('react');

var Bar = React.createClass({
  render: () => {
    console.debug('render bar');
    return <h2>bar</h2>;
  }
});

module.exports = Bar;