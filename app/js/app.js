/* global require, module */
var React = require('react'),
    Bar = require('./foo/bar'),
    Bat = require('./foo/bat');

var App = React.createClass({
  statics: {
    run: (el) => React.render(<App/>, el)
  },
  render: () => (
    <div>
      <Bar/>
      <Bat/>
    </div>
  )
});

module.exports = App;
global.initApp = App.run;

