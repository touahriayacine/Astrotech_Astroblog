const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'astroblog'
  })
  
const connectToDba = ()=>{
    connection.connect()
}

const selectQuery =  (sQuery,params) => {
    return new Promise((resolve, reject) => {
        connection.query(sQuery,params,  function(err, rows) {
          if (err) {
            throw err
          }
          resolve(rows[0])
        })
    })
}

const insertQuery = (sQuery,params) => {
  return new Promise((resolve, reject) => {
      connection.query(sQuery,params,  function(err) {
        if (err) {
          throw err
        }
        resolve("Inserted")
      })
  })
}

module.exports = { connectToDba, selectQuery,insertQuery}