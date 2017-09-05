
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {updatingCampus, viewCampus} from '../../state-mgmt'

import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class CampusEditForm extends React.Component {
  constructor(props) {
    super(props)
    const {campus} = props
    this.state = {
      campusPreUpdate: campus,
      campusName: campus.name
    }
  }

  render () {

    const {
      classes,
      dispatch,
      handleParentRequestClose
    } = this.props

    const {
      campusPreUpdate,
      campusName
    } = this.state

    const updatedCampus = {
      id: campusPreUpdate.id,
      name: campusName,
      imageUrl: campusPreUpdate.imageUrl
    }

    return (
      <form className={classes.container} noValidate>
        <TextField
          id="update-campus-name"
          label="Campus Name"
          value={campusName}
          fullWidth
          margin="normal"
          onChange={({target}) => this.setState({campusName: target.value})}
        />

        <Button
          raised
          color="primary"
          className={classes.button}
          onClick={() => {
            dispatch(updatingCampus(updatedCampus))
              .then(() => dispatch(viewCampus(updatedCampus)))
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

CampusEditForm.propTypes = {
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

const styledCampusForm = withStyles(styles)(CampusEditForm)

const mapState = ({viewingCampus}) => ({
  campus: viewingCampus
})

// const mapDispatch =

export default connect(mapState, null)(styledCampusForm)
