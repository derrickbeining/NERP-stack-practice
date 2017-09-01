import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
  row: {
    display: 'inline',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function AvatarListItem ({classes, alt, url}) {
  return (
    <div className={classes.row}>
      <Avatar
        alt={alt}
        src={url}
        className={classes.avatar}
      />
    </div>
  );
}

AvatarListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvatarListItem);
