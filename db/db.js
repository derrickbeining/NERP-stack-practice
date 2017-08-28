'use strict'

const Sequelize = require('sequelize');
const debug = require('debug')('sql');
const chalk = require('chalk');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

const db = new Sequelize(connectionString, {
  logging: debug,
  native: true
})

module.exports = db
