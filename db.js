const fs = require("node:fs");
/**
* @typedef User
* @type {Object}
* @property {String} reg
* @property {String} full_name
* @property {String} course
* @property {Number} admission_year
**/

/**
* @type {User[]}
**/
let db;

let data = fs.readFileSync("database.csv");
let contents = data.toString();
let rows = contents.trim().split('\n');
let _db = rows.map((row) =>{
  let columns = row.trim().split(',').map(col =>{
    return col.trim()
  });

  return {
    reg: columns[0],
    full_name: columns[1],
    course: columns[2],
    admission_year: columns[3]
  }
})
db = _db;

function get(reg_id){
  if (!db){
    console.warn("Db may have not been initialized")
    return null;
  }

  let found = db.find((row)=>{
    return row.reg === reg_id
  });
  
  return found
}

module.exports = {
  get,
  db
}
