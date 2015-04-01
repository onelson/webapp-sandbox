/* global React, Bar, Bat */

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
