// define the schema for graphql 
const {
  GraphQLSchema ,
  GraphQLObjectType , 
  GraphQLString 
} = require('graphql') 

// root query is where the graph starts . 
const RootQueryType =  new GraphQLObjectType({
  name: 'RootQueryType' , // name can be anything . 
  fields:{
    hello:{ // accept a hello query on top of the graph 
      type : GraphQLString , 
      resolve : () => "World"
    }
  }
})

const ncSchema = new GraphQLSchema({
  query: RootQueryType 
  // mutation: ... later 
})

// export the schema 
module.exports = ncSchema