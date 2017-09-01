// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import StudentListItem from './StudentListItem'

function StudentsList ({classes, students}) {
  return (
    <div className={classes.root}>
      <List>
        {students.map(student => {
          return <StudentListItem key={student.id} student={student} />
        })}
      </List>
    </div>
  );
}

StudentsList.propTypes = {
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

const styledStudentList = withStyles(styles)(StudentsList)

const mapState = ({students}) => ({
  students
})

const mapDispatch = null

export default connect(mapState, mapDispatch)(styledStudentList)
