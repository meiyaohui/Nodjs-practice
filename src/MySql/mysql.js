var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'world'
});

connection.connect();

connection.query('SELECT * from city', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

console.log('mysql');