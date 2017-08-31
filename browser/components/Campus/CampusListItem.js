import React from 'react';
import {NavLink} from 'react-router-dom'

import {TableCell, TableRow} from 'material-ui/Table';


function CampusListItem ({campus, key}) {
  return (
    <TableRow key={key}>
      <TableCell>
        <NavLink to={`/campuses/${campus.id}`}>
          {campus.name}
        </NavLink>
      </TableCell>
    </TableRow>
  )
}

export default CampusListItem
