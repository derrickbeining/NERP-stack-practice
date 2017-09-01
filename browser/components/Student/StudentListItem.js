import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import history from '../../routes/history'
import {viewStudent as view} from '../../state-mgmt'

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

function StudentListItem ({student, view}) {

  function handleClick () {
    view(student)
    history.push(`/students/${student.id}`)
  }

  return (
    <ListItem
      button
      divider
      onClick={handleClick}
    >
      <Avatar alt={student.name} src={student.imageUrl} />
      <ListItemText
        primary={student.firstName + ' ' + student.lastName}
        secondary={student.email}
      />
      <ListItemSecondaryAction>
        <ListItemText
          primary="Campus"
        />
        <Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

const mapDispatch = {view}

export default connect(null, mapDispatch)(StudentListItem)
