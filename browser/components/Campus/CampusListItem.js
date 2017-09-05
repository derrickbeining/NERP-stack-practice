import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import history from '../../routes/history'
import {viewCampus} from '../../state-mgmt'

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

function CampusListItem ({campus, viewCampus}) {

  function handleClick () {
    viewCampus(campus)
    history.push(`/campuses/${campus.id}`)
  }

  return (
    <ListItem
      button
      divider
      onClick={handleClick}
    >
      <Avatar alt={campus.name} src={campus.imageUrl} />
      <ListItemText
        primary={campus.name}
      />
    </ListItem>
  )
}

const mapDispatch = {viewCampus}

export default connect(null, mapDispatch)(CampusListItem)
