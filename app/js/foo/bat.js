/* global require, module */


var React = require('react'),
    mui = require('material-ui'),
    Dialog = mui.Dialog,
    FlatButton = mui.FlatButton;

var Bat = React.createClass({
  handleClick() {
    return this.refs.dialog.show();
  },
  render()  {
    console.debug('render bat');
    var standardActions = [
      {text: 'Cancel'},
      {text: 'Submit'}
    ];
    return (
      <div className={'bat'}>
        <Dialog
          title="Dialog With Standard Actions"
          ref="dialog" actions={standardActions}>

          The actions in this window are created from the json that's passed in.

        </Dialog>
        <FlatButton label="dialog" onClick={this.handleClick}/>
      </div>
    );
  }
});

module.exports = Bat;

