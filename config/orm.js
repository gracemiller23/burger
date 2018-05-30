var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    selectAll: function( tableName, cb){
        var queryString = "SELECT * FROM " + tableName + ";";
        console.log(queryString);

        connection.query(queryString, function(err, res){
            if (err){throw err};
            cb(res);
        });

    },
    insertOne: function( tableName, columns, newBurger, cb){
        var queryString = "INSERT INTO " + tableName;

        queryString += " (" + columns.toString() + ") ";
        queryString += "VALUES (" + printQuestionMarks(newBurger.length) + ");";
        console.log(queryString);

        connection.query(queryString, newBurger, function(err, res){
            if (err){throw err};

            cb(res);
        })
    },
    updateOne: function( tableName, identifier, condition, cb){
        var queryString = "UPDATE " + tableName;

        queryString += " SET " + objToSql(identifier) + " WHERE " + condition + ";";
        console.log(queryString);

        connection.query(queryString, function(err, res){
            if (err){throw err};

            cb(res);
        })
    }
}






module.exports = orm;