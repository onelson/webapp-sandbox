/* global require, module, global */

var React = require('react'),
    Bar = require('./foo/bar'),
    Bat = require('./foo/bat'),
    Navbar = require('./navbar'),
    injectTapEventPlugin = require("react-tap-event-plugin");

var App = React.createClass({
  statics: {
    run(el) {
      injectTapEventPlugin();
      React.render(<App/>, el);
      console.debug('bootstraped');
    }
  },
  render() {
    return (
      <div>
        <Navbar/>
        <Bar/>
        <Bat/>
      </div>
    );
  }
});

module.exports = App;
global.initApp = App.run;

