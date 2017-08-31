'use strict'
/* ----------------  UTILITIES  ----------------------- */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './state-mgmt/store'
/* ----------------  COMPONENTS  ----------------------- */
import Routes from './routes'



/* ----------------  ROOT COMPONENT  ----------------------- */

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
)
