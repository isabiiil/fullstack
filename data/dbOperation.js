const config = require('./dbConfig'),
      sql    = require('mssql');

const getTasks = async() => {
  try {
    let pool = await sql.connect(config);
    let tasks = pool.request().query("SELECT * FROM Tasks");
    console.log(tasks);
    return tasks;
  }
  catch(error) {
    console.log(error);
  }
}

module.exports = {
  getTasks
}