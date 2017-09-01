import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

const emails = [ 'username@gmail.com', 'user02@gmail.com' ];
const styles = {
  avatar: {
    background: blue[ 100 ],
    color: blue[ 600 ],
  },
};

class SimpleDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }

  handleRequestClose () {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick (value) {
    this.props.onRequestClose(value);
  };

  render () {
    const {classes, student, onRequestClose, selectedValue, ...other} = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Edit Student Info</DialogTitle>
        <div>
          <List>
            <ListItem>
              <ListItemText primary="Text Input Here" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Text Input Here" />
            </ListItem>
          </List>
        </div>
        <Button color="primary">Save</Button>
        <Button color="accent">Cancel</Button>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

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
