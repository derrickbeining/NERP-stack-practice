/* eslint-disable class-methods-use-this, react/prefer-stateless-function */
/* ----------------  UTILITIES  ----------------------- */
import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
/* ----------------  COMPONENTS  ----------------------- */
// import NavFooter from '../components/Nav-Footer-Wrap'
// import PaperContainer from '../components/PaperContainer'
import Home from '../components/Home'
/* ----------------  ROUTES COMPONENT ------------------ */

class Routes extends Component {

  // componentDidMount () {
  //   this.props.loadInitialState()
  // }

  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route component={Home} />
        </Switch>
      </Router>
    )
  }

}

/* -----------------   SUBSCRIBE ROUTES TO STORE    ------------------ */

// const mapState = null
// const mapDispatch = null
// (dispatch) => ({
// loadInitialState: () => {
//   // get all campuses
//   // get all students
// }
// })

// export default connect(mapState, mapDispatch)(Routes)
export default Routes
