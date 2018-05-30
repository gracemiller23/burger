var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "bul5kd2ovsxecakc",
    password: "z50hy128nuz1jf9w",
    database: "i6utvi6aff9zcb1s"
  });

connection.connect(function(err){
    if (err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;