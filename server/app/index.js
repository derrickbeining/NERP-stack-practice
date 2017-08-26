'use strict'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const {resolve} = require('path')


if (process.env.NODE_ENV !== 'production') {
  app.use(require('volleyball'))
}

module.exports = app.use(
  bodyParser.urlencoded({extended: true}),
  bodyParser.json(),
  express.static(resolve(__dirname, '..', 'public')),
  require('./route'),
  require('./error')
)


