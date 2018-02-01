var environment=process.env.NODE_ENV || 'development'
var knex=require('knex')
var config=require('./knexfile.js')[environment]
var knexConnection=knex(config)

module.exports=knexConnection
