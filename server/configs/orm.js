
const connection = require("./connection.js");

const orm = {
  selectAll: function(table) {

    return new Promise((resolve, reject) => {

      const querytStr = "SELECT * FROM ??";

      connection.query(querytStr, table, (err, result) => {
        if (err) { 
            reject(err);
        } else {
            resolve(result);
        }

      });
    });
  },

  insertOne: function(table, name, state) {

    return new Promise((resolve, reject) => {

        const querytStr = "INSERT INTO ??(burger_name, devoured) VALUES (? ,?)";
  
        connection.query(querytStr, [table,name, state], (err, result) => {
          if (err) { 
              reject(err);
          } else {
              resolve(result);
          }
  
        });
      });
      
  },

  updateOne: function(table, id, col, data) {
    return new Promise((resolve, reject) => {

        const querytStr = "UPDATE ?? SET ?? = ? WHERE id = ? ";
  
        connection.query(querytStr, [table, col, data, id ], (err, result) => {
          if (err) { 
              reject(err);
          } else {
              resolve(result);
          }
  
        });
      });
  }

};

module.exports = orm;
