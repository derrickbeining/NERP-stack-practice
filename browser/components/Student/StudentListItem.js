import React from 'react';
import {Link} from 'react-router-dom'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import history from '../../routes/history'

function StudentListItem ({student}) {

  return (
    <ListItem
      button
      divider
      onClick={() => history.push(`/students/${student.id}`)}
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

export default StudentListItem
