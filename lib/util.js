const humps = require('humps') 
module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development', 
  fromSnakeCase: (GraphQLType) => ({
    type: GraphQLType ,   
    resolve: ( obj , args , ctx , { fieldName }) => obj[humps.decamelize( fieldName )] 
  })
};
