/* global require, module */

const React = require('react');
const mui = require('material-ui');
const Dialog = mui.Dialog;
const FlatButton = mui.FlatButton;

const standardActions = [
  {text: 'Cancel'},
  {text: 'Submit'}
];

const Bat = React.createClass({
  handleClick() {
    return this.refs.dialog.show();
  },
  render()  {
    console.debug('render bat');

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
