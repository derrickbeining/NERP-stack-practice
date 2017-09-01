/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Menu, {MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider'

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  divider: {
    borderBottom: '1px solid #000'
  }
});



function CampusMenuList (props) {
  // state = {
  //   anchorEl: undefined,
  //   open: false,
  //   selectedIndex: 1,
  // };

  // button = undefined;

  // handleClickListItem = event => {
  //   this.setState({open: true, anchorEl: event.currentTarget});
  // };

  // handleMenuItemClick = (event, index) => {
  //   this.setState({selectedIndex: index, open: false});
  // };

  // handleRequestClose = () => {
  //   this.setState({open: false});
  // };


  const {
    classes,
    campuses,
    selectedCampus,
    campusMenuOpen,
    menuAnchor,
    handleMenuItemClick,
    handleRequestClose
  } = props
  return (
    // <div className={classes.root}>
    //   <List>
    //     <ListItem
    //       button
    //       aria-haspopup="true"
    //       aria-controls="lock-menu"
    //       aria-label="When device is locked"
    //       onClick={this.handleClickListItem}
    //     >
    //       <ListItemText
    //         primary="Campus Name Here"
    //       />
    //     </ListItem>
    //     <Divider className={classes.divider} />
    //   </List>
    <Menu
      id="lock-menu"
      anchorEl={menuAnchor}
      open={campusMenuOpen}
      onRequestClose={handleRequestClose}
    >
      {campuses.map((campus, index) => (
        <MenuItem
          key={campus.id}
          selected={campus.id === selectedCampus.id}
          onClick={() => handleMenuItemClick(campus)}
        >
          {campus.name}
        </MenuItem>
      ))}
    </Menu>
    // </div>
  );

}

CampusMenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledCampusMenuList = withStyles(styles)(CampusMenuList);

const mapState = ({campuses}) => ({campuses})

export default connect(mapState, null)(styledCampusMenuList)
