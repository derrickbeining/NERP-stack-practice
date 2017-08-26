const Router = require('express').Router()

const {resolve} = require('path')


Router
  .use('/api', require('./api'))
  .get('/*', (_, res) => {
    res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))
  })

module.exports = Router
