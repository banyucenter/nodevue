var mysql = require('mysql')

var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password : "12345abc",
    database: "dbrestapi"
});

con.connect(function(err){
    if(err) throw err;
});

module.exports = con;
