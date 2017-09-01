// @flow weak

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
  deletingStudent,
  fetchingStudents
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
import DialogButton from './StudentEditDialog'

class StudentDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogIsOpen: false,
    }
  }

  handleRequestClose = value => {
    this.setState({dialogIsOpen: false});
  };

  render () {

    const {
      classes,
      student,
      deleteStudent
    } = this.props

    const studentName = student.firstName + ' ' + student.lastName

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography type="display1" component="h1" align="center">
            STUDENT INFORMATION
        </Typography>
          <Divider />

          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={12} md={3}>
              <Avatar
                alt={studentName}
                src={student.imageUrl}
                className={classes.avatar} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid item xs={12}>
                <Typography type="title" component="h2">
                  Name:
              </Typography>
                <Typography type="body2" component="p">
                  {studentName}
                </Typography>
                <Typography type="title" component="h2">
                  Email:
              </Typography>
                <Typography type="body2" component="p">
                  <a
                    href={`mailto:${student.email}`}
                    target="_blank"
                  >
                    {student.email}
                  </a>
                </Typography>
                <Typography type="title" component="h2">
                  Campus:
              </Typography>
                <Typography type="body2" component="p">
                  <Link to={`/campuses/${student.campusId}`}>
                    {student.campus.name}
                  </Link>
                </Typography>
                <Button
                  onClick={() => this.setState({dialogIsOpen: true})}
                  raised
                  color="primary"
                  className={classes.button}
                >
                  Edit
               </Button>

                <DialogButton
                  // selectedValue={this.state.selectedValue}
                  open={this.state.dialogIsOpen}
                  onRequestClose={this.handleRequestClose}
                />

                <Button
                  onClick={() => deleteStudent(student.id)}
                  raised
                  color="accent"
                  className={classes.button}
                >
                  Delete
              </Button>
              </Grid>

            </Grid>
          </Grid>

        </Paper>
      </div>
    )
  }
}


StudentDetails.propTypes = {
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
    margin: '0 auto'
  },
  grid: {
    flexGrow: 1,
    margin: 30,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const styledStudentDetails = withStyles(styles)(StudentDetails)

const mapState = (state) => ({
  student: state.viewingStudent
})

const mapDispatch = () => (dispatch, {history}) => ({
  deleteStudent: (id) => {
    dispatch(deletingStudent(id))
      .then(() => dispatch(fetchingStudents()))
      .catch(console.error.bind(console))
    history.push('/students')
  }
})

export default connect(mapState, mapDispatch)(styledStudentDetails)
