const humps = require('humps') 
// you should camelize your object keys here before it event hits the resolvers .


module.exports = (ctx) => ({

  getUser: (key) => ctx.query(`
    select * from users where api_key = $1
  `, [key]).then( r => humps.camelizeKeys(r.rows[0]))  , 

  getAllUsers:() => ctx.query(`
  select* from users `).then(results => results.rows.map( row => humps.camelizeKeys(row) ))

})
