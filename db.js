const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'onlinecinemaajk.sql'
});

connection.connect();

module.exports = connection;