'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req,res){
    connection.query('select * from person', function(error, rows, fields){
        if(error){
            console.error(error);
        }else {
            response.ok(rows,res)
        }
    })
};

exports.index = function(req, res) {
    response.ok("Hello REST API OK"),res
};