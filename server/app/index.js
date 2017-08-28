'use strict'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const {resolve} = require('path')
const mainRouter = require('../route')
const errorHandler = require('./error')


if (process.env.NODE_ENV !== 'production') {
  app.use(require('volleyball'))
}

app.use(
  bodyParser.urlencoded({extended: true}),
  bodyParser.json(),
  express.static(resolve(__dirname, '../../', 'public')),
  mainRouter,
  errorHandler
)

module.exports = app
