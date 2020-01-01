const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

connection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('Connected!');
    }
})


module.exports = connection