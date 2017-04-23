const app = require('express')()
const graphExpress = require('express-graphql')
const { nodeEnv } = require('./util')
console.log(`Running in ${nodeEnv} mode...`)
const ncSchema = require('../schema')
const {graphql} = require('graphql') 

// middleware (url , callback to handle route )
app.use('/graphql' , graphExpress({
  schema: ncSchema , 
  graphiql: true 
}))
// executer returns a promise .  
// call graphql execture once we have a web server 
// graphql( ncSchema , "{hello}" ).then( r => console.log(r.data.hello) ) 

app.listen(3333 , ()=> console.log("app is running")) 
