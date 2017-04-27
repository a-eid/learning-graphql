const {
  GraphQLID , 
  GraphQLNonNull , 
  GraphQLString , 
  GraphQLObjectType
} = require('graphql') 
const contestStatusType = require('./contestStatusType')

module.exports = new GraphQLObjectType({
  name: "ContestType" , 
  description: "a object representation of the contexts users have" , 
  fields:{
    id: { type:  new GraphQLNonNull( GraphQLID ) } ,
    code: { type: new GraphQLNonNull(GraphQLString) } , 
    title: { type: new GraphQLNonNull(GraphQLString) } , 
    description : { type: GraphQLString } , 
    // only three values are possible .. draft publish and archived .. 
    status: { type: new GraphQLNonNull(contestStatusType) } , 
    createdAt: { type: new GraphQLNonNull(GraphQLString) } ,  
    // createdBy: { type: GraphQLString } 
  }
}) 
