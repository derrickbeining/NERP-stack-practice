'use strict'
const db = require('./db')
const {Campus} = require('./models')
const dummy = require('faker')
const {yellow, red} = require('chalk')

function buildStudent () {
  const firstName = dummy.name.firstName()
  const lastName = dummy.name.lastName()
  const emailDomain = dummy.internet.email().split('@')[ 1 ]
  const email = `${firstName}.${lastName}@${emailDomain}`
  const imageUrl = dummy.image.avatar()
  return {
    firstName,
    lastName,
    email,
    imageUrl
  }
}

function buildNStudents (num) {
  const students = []
  while (num) {
    students.push(buildStudent())
    num--
  }
  return students
}

function creatingCampusWithStudents () {
  const name = [
    dummy.name.lastName(),
    'School of',
    dummy.hacker.ingverb()
      .split(' ')
      .map(word => word.substr(0, 1).toUpperCase() + word.substr(1))
      .join(' ')
  ].join(' ')
  return Campus.create({
    name,
    imageUrl: dummy.image.imageUrl(),
    students: buildNStudents(20)
  }, {
      include: [ {
        association: Campus.Students
      }]
    })
}

function creatingNCampusesWithStudents (num) {
  const campuses = []
  while (num) {
    campuses.push(creatingCampusWithStudents())
    num--
  }
  return Promise.all(campuses)
}

db.sync({force: true})
  .then(() => {
    console.log(yellow('Seeding the DB'))
    return creatingNCampusesWithStudents(10)
  })
  .then(() => console.log(yellow('DB seeded successfully')))
  .then(() => db.close())
  .then(() => console.log(yellow('DB connection closed')))
  .catch(err => console.error(red(err)))
