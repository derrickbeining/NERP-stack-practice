import React from 'react';
import PropTypes from 'prop-types';

import CampusEditForm from './CampusEditForm'
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';




class SimpleDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }

  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick (value) {
    this.props.onRequestClose(value);
  };

  render () {
    const {classes, campus, onRequestClose, selectedValue, ...other} = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Edit Student Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the campus's information then click save.
          </DialogContentText>

          <CampusEditForm
            campus={campus}
            handleParentRequestClose={this.handleRequestClose}
          />

        </DialogContent>
        {/* <DialogActions>
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={this.handleRequestClose}
          >
            Save
            </Button>
          <Button
            raised
            color="accent"
            className={classes.button}
            onClick={this.handleRequestClose}
          >
            Cancel
          </Button>
        </DialogActions> */}
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const styles = theme => ({
  avatar: {
    background: blue[ 100 ],
    color: blue[ 600 ],
  },
  button: {
    margin: theme.spacing.unit,
  }
})

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog)

export default SimpleDialogWrapped

// class SimpleDialogDemo extends React.Component {
//   static defaultProps: {};
//   state = {
//     open: false,
//     selectedValue: emails[ 1 ],
//   };

//   handleRequestClose = value => {
//     this.setState({selectedValue: value, open: false});
//   };

//   render () {
//     return (
//       <div>
//         <Button
//           onClick={() => this.setState({open: true})}
//           raised
//           color="primary"
//           className={this.props.classNames}
//         >
//           Edit
//         </Button>
//         <SimpleDialogWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onRequestClose={this.handleRequestClose}
//         />
//       </div>
//     )
//   }
// }

// export default SimpleDialogDemo;
