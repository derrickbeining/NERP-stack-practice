// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CampusListItem from './CampusListItem'

function CampusesList ({classes, campuses}) {
  return (
    <div className={classes.root}>
      <List>
        {campuses.map(campus => {
          return <CampusListItem key={campus.id} campus={campus} />
        })}
      </List>
    </div>
  );
}

CampusesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    margin: '50px auto 0 auto',
    maxWidth: 900,
    background: theme.palette.background.paper,
  },
});

const styledCampusesList = withStyles(styles)(CampusesList)

const mapState = ({campuses}) => ({
  campuses
})

const mapDispatch = null

export default connect(mapState, mapDispatch)(styledCampusesList)
