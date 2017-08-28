'use strict'

const {Student} = require('../../../../db/models')
console.log(Student)
const studentRouter =
  module.exports =
  require('express').Router()

studentRouter
  .get('/', (req, res) => {
    Student.findAll({})
      .then(res.json.bind(res))
      .catch(console.error.bind(console))
  })
