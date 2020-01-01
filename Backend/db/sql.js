const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // password: 'bidemi1000',
    // database: 'sql_form_data'
    
});

connection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('Connected!');
    }
})


module.exports = connection