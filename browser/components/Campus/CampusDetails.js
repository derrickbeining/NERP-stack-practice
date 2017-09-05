// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
  fetchingCampusById,
  viewCampus,
  deletingCampus,
  fetchingCampuses
} from '../../state-mgmt'

import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button';
import EditDialog from './CampusEditDialog'
import StudentsList from '../Student/StudentsList'

class CampusDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogIsOpen: false,
    }
  }

  // componentDidMount () {
  //   const id = this.props.match.params.id
  //   this.props.getStudentById(id)
  // }

  handleRequestClose = value => {
    this.setState({dialogIsOpen: false});
  };

  render () {

    const {
      classes,
      campus,
      students,
      deleteStudent
    } = this.props

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography type="display1" component="h1" align="center">
            CAMPUS INFORMATION
        </Typography>
          <Divider />

          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={12} md={3} >
              <Avatar
                alt={campus.name}
                src={campus.imageUrl}
                className={classes.avatar} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid item xs={12} >
                <Typography type="title" component="h2">
                  Name:
              </Typography>
                <Typography type="body2" component="p">
                  {campus.name}
                </Typography>
                <Typography type="title" component="h2">
                  Address:
              </Typography>
                <Typography type="body2" component="p">
                  123 Use Your Imagination, Todo, FIXME, 12345
                </Typography>
                <Typography type="title" component="h2">
                  Contact:
              </Typography>
                <Typography type="body2" component="p">
                  notarealemail@nowhere.com
                </Typography>

                <Button
                  onClick={() => this.setState({dialogIsOpen: true})}
                  raised
                  color="primary"
                  className={classes.button}
                >
                  Edit
               </Button>

                <EditDialog
                  campus={campus}
                  // selectedValue={this.state.selectedValue}
                  open={this.state.dialogIsOpen}
                  onRequestClose={this.handleRequestClose}
                />

                <Button
                  onClick={() => deleteCampus(campus.id)}
                  raised
                  color="accent"
                  className={classes.button}
                >
                  Delete
              </Button>
              </Grid>

            </Grid>
          </Grid>

          <Typography type="title" component="h2">
            Students:
          </Typography>
          <StudentsList students={students.filter(student => {
            return student.campusId === campus.id
          })} />

        </Paper>
      </div>
    )
  }
}


CampusDetails.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  root: theme.mixins.gutters({
    width: '100%',
    maxWidth: '900px',
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 10,
  }),
  avatar: {
    maxWidth: '100%',
    width: '200px',
    height: '200px',
    margin: '0 auto',
  },
  grid: {
    flexGrow: 1,
    margin: 30,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const styledStudentDetails = withStyles(styles)(CampusDetails)

const mapState = (state) => ({
  campus: state.viewingCampus,
  students: state.students
})

const mapDispatch = () => (dispatch, {history}) => ({

  deleteCampus: (id) => {
    dispatch(deletingCampus(id))
      .then(() => dispatch(fetchingCampuses()))
      .catch(console.error.bind(console))
    history.push('/campuses')
  },

  getCampusById: (id) => {
    fetchingCampusById(id)
      .then(campus => dispatch(viewCampus(campus)))
      .catch(console.error.bind(console))
  }
})

export default connect(mapState, mapDispatch)(styledStudentDetails)
