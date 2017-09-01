// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {withStyles} from 'material-ui/styles'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import CampusListItem from './CampusListItem'


function CampusesList ({classes, campuses}) {

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Campus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campuses.map(campus => {
            return (
              <CampusListItem key={campus.id} campus={campus} />
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

CampusesList.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  paper: {
    width: '100%',
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '75px',
    overflowX: 'auto',
  },
})

const mapState = ({campuses}) => ({campuses})
const mapDispatch = null


const styledCampusList = withStyles(styles)(CampusesList)
export default connect(mapState, mapDispatch)(styledCampusList)
