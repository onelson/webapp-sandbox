/* global require, module, global */

const React = require('react');
const Bar = require('./foo/bar');
const Bat = require('./foo/bat');
const Navbar = require('./navbar');
const injectTapEventPlugin = require("react-tap-event-plugin");

const App = React.createClass({
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
