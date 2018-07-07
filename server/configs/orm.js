const connection = require("./connection.js");

const orm = {
  selectAll: params => query("SELECT * FROM ??", params),

  insertOne: params =>
    query("INSERT INTO ??(burger_name, devoured) VALUES (? ,?)", params),

  updateOne: params => query("UPDATE ?? SET ?? = ? WHERE id = ? ", params)
};

function query(querytStr, params) {
  return new Promise((resolve, reject) => {
    connection.query(querytStr, params, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = orm;
