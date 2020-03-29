//IMPORT Knex for DataBase managment
const knex = require('knex')
const config = require('../../knexfile')

// //SETTING Test or Development enveiroment
// const env = process.env.NODE_ENV == 'test' ? config.test : config.development

const connection = knex(config.development)

module.exports = connection