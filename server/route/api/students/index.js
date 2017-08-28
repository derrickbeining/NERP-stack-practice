'use strict'

const {Student} = require('../../../../db/models')

const studentRouter =
  module.exports =
  require('express').Router()

studentRouter
  .param('id', (req, res, next, id) => {
    return Student.findById(id)
      .then(student => {
        req.student = student
        next()
      })
      .catch(next)
  })

studentRouter.route('/')
  .get((req, res, next) => {
    return Student.findAll({})
      .then(res.json.bind(res))
      .catch(next)
  })
  .post((req, res, next) => {
    Student.create(req.body)
      .then(student => {
        res.status(201).json(student)
      })
      .catch(next)
  })

studentRouter.route('/:id')
  .get((req, res) => {
    res.json(req.student)
  })
  .put((req, res, next) => {
    req.student.update(req.body)
      .then(res.json.bind(res))
      .catch(next)
  })
  .delete((req, res, next) => {
    req.student.destroy()
      .then(() => res.sendStatus(204))
      .catch(next)
  })
