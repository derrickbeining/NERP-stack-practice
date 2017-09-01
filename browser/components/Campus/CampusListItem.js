import React from 'react';
import {Link} from 'react-router-dom'

import {TableCell, TableRow} from 'material-ui/Table';
import AvatarListItem from '../material/AvatarListItem'

function CampusListItem ({campus}) {
  return (
    <TableRow>
      <TableCell>
        <Link to={`/campuses/${campus.id}`}>
          {campus.name}
        </Link>
      </TableCell>
    </TableRow>
  )
}

export default CampusListItem
