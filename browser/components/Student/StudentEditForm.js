
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {updatingStudent, viewStudent} from '../../state-mgmt'

import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import CampusMenu from '../Campus/CampusMenu'



class StudentEditForm extends React.Component {
  constructor(props) {
    super(props)
    const {student} = props
    const {firstName, lastName, email, campus} = student
    this.state = {
      studentPreUpdate: student,
      firstName,
      lastName,
      email,
      campus,
      campusMenuOpen: false,
      menuAnchor: undefined
    }
  }

  handleClickCampusInput = event => {
    this.setState({campusMenuOpen: true, menuAnchor: event.currentTarget});
  }

  handleMenuItemClick = (campus) => {
    this.setState({campus: campus, campusMenuOpen: false});
  }

  handleRequestClose = () => {
    this.setState({campusMenuOpen: false});
  }

  render () {

    const {
      classes,
      dispatch,
      handleParentRequestClose
    } = this.props

    const {
      studentPreUpdate,
      firstName,
      lastName,
      email,
      campus,
      campusMenuOpen,
      menuAnchor
    } = this.state

    const updatedStudent = {
      id: studentPreUpdate.id,
      firstName,
      lastName,
      email,
      imageUrl: studentPreUpdate.imageUrl,
      campus
    }

    return (
      <form className={classes.container} noValidate>
        <TextField
          id="update-first-name"
          label="First Name"
          value={firstName}
          fullWidth
          margin="normal"
          onChange={({target}) => this.setState({firstName: target.value})}
        />
        <TextField
          id="update-last-name"
          label="Last Name"
          InputProps={{placeholder: 'Placeholder'}}
          value={lastName}
          fullWidth
          margin="normal"
          onChange={({target}) => this.setState({lastName: target.value})}
        />
        <TextField
          id="update-email"
          label="Email"
          InputProps={{placeholder: 'Placeholder'}}
          value={email}
          fullWidth
          margin="normal"
          onChange={({target}) => this.setState({email: target.value})}
        />
        <TextField
          id="update-campus"
          label="Campus"
          InputProps={{placeholder: 'Placeholder'}}
          value={campus.name}
          fullWidth
          margin="normal"
          onChange={() => this.setState({campus: this.state.campus})}
          onClick={this.handleClickCampusInput}
        />

        <CampusMenu
          campusMenuOpen={campusMenuOpen}
          selectedCampus={campus}
          menuAnchor={menuAnchor}
          handleMenuItemClick={this.handleMenuItemClick}
          handleRequestClose={this.handleRequestClose}
        />

        <Button
          raised
          color="primary"
          className={classes.button}
          onClick={() => {
            dispatch(updatingStudent(updatedStudent))
              .then(() => dispatch(viewStudent(updatedStudent)))
              .then(() => handleParentRequestClose())
          }}
        >
          Save
            </Button>
        <Button
          raised
          color="accent"
          className={classes.button}
          onClick={handleParentRequestClose}
        >
          Cancel
          </Button>
      </form>
    );
  }
}

StudentEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const styledStudentForm = withStyles(styles)(StudentEditForm)

const mapState = ({viewingStudent}) => ({
  viewingStudent
})

// const mapDispatch =

export default connect(mapState, null)(styledStudentForm)
