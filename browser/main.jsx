'use strict'
/* ----------------  UTILITIES  ----------------------- */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './state-mgmt'
/* ----------------  MATERIAL-UI STYLING  ----------------------- */
import createMuiTheme from 'material-ui/styles/theme';
import {MuiThemeProvider} from 'material-ui/styles';
/* ----------------  COMPONENTS  ----------------------- */
import Routes from './routes'

/* ----------------  ROOT COMPONENT  ----------------------- */

render(
  <MuiThemeProvider theme={createMuiTheme()} >
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider >,
  document.getElementById('main')
)
