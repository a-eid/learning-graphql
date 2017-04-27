const {
  GraphQLNonNull , 
  GraphQLObjectType , 
  GraphQLString , 
  GraphQLList
} = require('graphql') 
const pgDb = require('../../database/pgdb')


// other types 
const MeType = require('./me')

// root query type definition 
module.exports = new GraphQLObjectType({
  name: 'RootQueryType' , 
  fields:{
    me:{
      // shape of what you gonna query for with me .. 
      type : MeType ,
      description: "the current user identified by the api key",
      // args you gonna pass to me query 
      args:{
        key: { type : new GraphQLNonNull(GraphQLString) }
      }, 
      // how to resolve it 
      resolve:( obj , args , { pgPool } ) => pgDb( pgPool ).getUser( args.key ) 
    },
    users:{
      type: new GraphQLList(MeType) , 
      description: " all users" , 
      resolve: ( obj , args , {pgPool}) => pgDb(pgPool).getAllUsers() 
    }
  }
})