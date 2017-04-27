const {
  GraphQLObjectType, 
  GraphQLID , 
  GraphQLString , 
  GraphQLNonNull
} = require('graphql')

const { fromSnakeCase } = require('../../lib/util')


// how to define a custom type in graphql .
module.exports = new GraphQLObjectType({
  name: "MeType" , 
  fields:{
    id: {type: GraphQLID} , 
    firstName: {type: GraphQLString } , 
    lastName: {type: GraphQLString }  , 
    createdAt: {type: GraphQLString } , 
    email: {type: new GraphQLNonNull(GraphQLString)}
  }
})


/**
 * if you have a mismatch between column name and key name on the fields type 
 * default is  f is the a key of fields on the type 
 * f :{
 *  ..
 *  resolve: obj => obj.f // matches the upper f  
 *  // if you if you want to return y or m or x instead you can tottaly do that ,
 *  resolve: ovj => obj.m // api value is f and table column is m 
 * }
 * 
 */
























