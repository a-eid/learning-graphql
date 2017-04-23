const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);
const ncSchema = require('../schema')
// console.log(ncSchema)
const {graphql} = require('graphql') 

// const query = process.env[2]
graphql( ncSchema , "{hello}" ).then( r => console.log(r) ) 


