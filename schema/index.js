// helper types from 'graphql' .. 
const {
  GraphQLSchema ,
} = require('graphql') 

// import types 
const RootQueryType = require('./types/root')

// define the schema ..
module.exports  = new GraphQLSchema({
  query: RootQueryType
  // mutation: ... 
})