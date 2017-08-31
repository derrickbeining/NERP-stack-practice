import React, {Component} from 'react'
import {connect} from 'react-redux'

import ButtoneAppBar from './material/ButtonAppBar'
import PaperContainer from './PaperContainer'

class Home extends Component {
  render () {
    return (
      <div>
        {/* <ButtonAppBar /> */}
        <PaperContainer />
      </div>
    )
  }
}

export default Home
