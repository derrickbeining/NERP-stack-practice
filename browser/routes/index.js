/* eslint-disable class-methods-use-this, react/prefer-stateless-function */
/* ----------------  UTILITIES  ----------------------- */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
/* ----------------  COMPONENTS  ----------------------- */
import Home from '../components/Home'
import Campuses from '../components/Campus/CampusesList'
import Students from '../components/Student/StudentsList'
import NavFooter from '../components/NavFooter'
/* ----------------  ROUTES COMPONENT ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialState()
  }

  render () {
    return (
      <Router history={history}>
        <NavFooter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/students" component={Students} />

            <Route component={Home} />
          </Switch>
        </NavFooter>
      </Router>
    )
  }

}

/* -----------------   SUBSCRIBE ROUTES TO STORE    ------------------ */

import {
  fetchingCampuses,
  fetchingStudents
} from '../state-mgmt'

const mapState = null
const mapDispatch = (dispatch) => ({
  loadInitialState: () => {
    dispatch(fetchingCampuses())
    dispatch(fetchingStudents())
  }
})

export default connect(mapState, mapDispatch)(Routes)

