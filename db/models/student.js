'use strict';
const Sequelize = require('sequelize')
const db = require('../db')


module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})
