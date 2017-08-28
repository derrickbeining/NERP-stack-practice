'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Theme from 'material-ui/styles/MuiThemeProvider'

import store from './store'
import PaperContainer from './components/PaperContainer'

render(
  <Theme >
    <Provider store={store}>
      <PaperContainer />
    </Provider>
  </Theme>,
  document.getElementById('main')
)
