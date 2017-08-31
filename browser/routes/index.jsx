/* eslint-disable class-methods-use-this, react/prefer-stateless-function */
/* ----------------  UTILITIES  ----------------------- */
import React, {Component} from 'React'
import {connect} from 'react-redux'
import Router from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
/* ----------------  COMPONENTS  ----------------------- */
import Home from '../components'
/* ----------------  ROUTES COMPONENT ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialState()
  }

  render () {
    return (
      <Router history={history}>
        <Nav-Footer>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route component={Home} />
          </Switch>
        </Nav-Footer>
      </Router>
    )
  }

}

/* -----------------   SUBSCRIBE ROUTES TO STORE    ------------------ */

const mapState = null
const mapDispatch = (dispatch) => ({
  loadInitialState: () => {
    // get all campuses
    // get all students
  }
})

export default connect(mapState, mapDispatch)(Routes)
