const app = require('express')()
const graphExpress = require('express-graphql')
const pg = require('pg') 
const PORT = process.env.PORT || 3333

const { nodeEnv } = require('./util')
const pgConfig = require('../config/pg')[nodeEnv] 

const ncSchema = require('../schema')
const {graphql} = require('graphql') 
// {
//   database: 'contests', 
//   username: 'aeid', 
//   passwrod: 'aeid'
// }

const pgPool = new pg.Pool(pgConfig) 

app.use('/graphql' , graphExpress({
  schema: ncSchema , 
  graphiql: true ,
  context: { pgPool } // pgPool.query <-- how you would execute queries ..  
}))

app.listen(PORT, ()=> console.log(" app is running ")) 
