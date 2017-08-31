/* eslint-disable class-methods-use-this, react/prefer-stateless-function */
/* ----------------  UTILITIES  ----------------------- */
import React, {Component} from 'React'
import {connect} from 'react-redux'
import Router from 'react-router'
import {Route, Switch} from 'react-router-dom'
import history from './history'
/* ----------------  COMPONENTS  ----------------------- */
import NavFooter from '../components/Nav-Footer-Wrap'
import PaperContainer from '../components/PaperContainer'
/* ----------------  ROUTES COMPONENT ------------------ */

class Routes extends Component {

  // componentDidMount () {
  //   this.props.loadInitialState()
  // }

  render () {
    return (
      <Router history={history}>
        <NavFooter>
          <Switch>
            <Route exact path="/" component={PaperContainer} />

            <Route component={PaperContainer} />
          </Switch>
        </NavFooter>
      </Router>
    )
  }

}

/* -----------------   SUBSCRIBE ROUTES TO STORE    ------------------ */

const mapState = null
const mapDispatch = null
// (dispatch) => ({
// loadInitialState: () => {
//   // get all campuses
//   // get all students
// }
// })

export default connect(mapState, mapDispatch)(Routes)
