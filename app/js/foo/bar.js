/* global require, module */

var React = require('react');

var Bar = React.createClass({
  render: () => {
    console.info('render bar');
    return <h2>bar</h2>;
  }
});

module.exports = Bar;