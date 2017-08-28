'use strict'

const {Campus} = require('../../../../db/models')

const campusRouter =
  module.exports =
  require('express').Router()

campusRouter
  .param('id', (req, res, next, id) => {
    return Campus.findById(id)
      .then(campus => {
        req.campus = campus
        next()
      })
      .catch(next)
  })

campusRouter.route('/')
  .get((req, res, next) => {
    return Campus.findAll({})
      .then(res.json.bind(res))
      .catch(next)
  })
  .post((req, res, next) => {
    Campus.create(req.body)
      .then(student => {
        res.status(201).json(student)
      })
      .catch(next)
  })

campusRouter.route('/:id')
  .get((req, res) => {
    res.json(req.campus)
  })
  .put((req, res, next) => {
    req.campus.update(req.body)
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete((req, res, next) => {
    req.campus.destroy()
      .then(() => res.sendStatus(204))
      .catch(next)
  })
