/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
// import history from '../routes/history'

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';

class TabNav extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    this.props.history.push(`/${value}`)
  }

  render () {
    const {classes, history} = this.props;
    const getTabValue = () => {
      const pathname = history.location.pathname
      if (pathname.includes('campuses')) return 'campuses'
      if (pathname.includes('students')) return 'students'
      return 'home'
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            centered
            value={getTabValue()}
            onChange={this.handleChange}
          >
            <Tab value="home" label="Home" />
            <Tab value="campuses" label="Campuses" />
            <Tab value="students" label="Students" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

TabNav.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper
  }
});

/* ---------------  CONNECT  -------------------- */


const styledTabNav = withStyles(styles)(TabNav)

export default withRouter(connect(null, null)(styledTabNav))
