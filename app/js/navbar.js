/* global require, module */

const React = require('react');
const mui = require('material-ui');

const {
  Toolbar,
  ToolbarGroup,
  DropDownIcon,
  DropDownMenu,
  FontIcon,
  RaisedButton
  } = mui;

const filterOptions = [
  {payload: '1', text: 'All Broadcasts'},
  {payload: '2', text: 'All Voice'},
  {payload: '3', text: 'All Text'},
  {payload: '4', text: 'Complete Voice'},
  {payload: '5', text: 'Complete Text'},
  {payload: '6', text: 'Active Voice'},
  {payload: '7', text: 'Active Text'}
];

const iconMenuItems = [
  {payload: '1', text: 'Download'},
  {payload: '2', text: 'More Info'}
];

const Navbar = React.createClass({
  render() {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems={filterOptions} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <FontIcon className="md md-timelapse md-2x" />
          <FontIcon className="md md-sort md-2x" />
          <DropDownIcon
            iconClassName="md md-expand-more md-2x"
            menuItems={iconMenuItems} />
          <span className="mui-toolbar-separator">&nbsp;</span>
          <RaisedButton label="Create Broadcast" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

});

module.exports = Navbar;
