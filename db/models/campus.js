const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})
