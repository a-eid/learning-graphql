const {
  GraphQLObjectType, 
  GraphQLID , 
  GraphQLString , 
  GraphQLNonNull, 
  GraphQLList
} = require('graphql')

const { fromSnakeCase } = require('../../lib/util')
const contestType = require('./contest')
const pgdb = require('../../database/pgdb')
// how to define a custom type in graphql .
module.exports = new GraphQLObjectType({
  name: "MeType" , 
  fields:{
    id: { type: new GraphQLNonNull( GraphQLID )} , 
    firstName: {type: GraphQLString } , 
    lastName: {type: GraphQLString }  , 
    createdAt: {type: GraphQLString } , 
    email: {type: new GraphQLNonNull(GraphQLString)},
    contests:{
      type: new GraphQLList(contestType) ,
      resolve: (obj , args , { pgPool }) => pgdb(pgPool).getContests(obj)
    }
  }
})

