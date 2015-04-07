/* global require, module */

const React = require('react');

const Bar = React.createClass({
  render() {
    console.debug('render bar');
    return <h2>bar</h2>;
  }
});

module.exports = Bar;