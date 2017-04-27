const {
  GraphQLEnumType 
} = require('graphql') 

module.exports = new GraphQLEnumType({
  name:"ContestStatusType" , 
  values:{
    // how the values are represented in the database . 
    DRAFT:{value: 'draft'},
    PUBLISHED: {value: 'published'} , 
    ARCHIVED:{ value: 'archived'} 
  }
})
