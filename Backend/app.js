const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./db/sql');
const path = require('path');
const {sendUniqueId} = require('./emails');


const port = process.env.PORT
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyparser.json());

const publicDirPath = path.join(__dirname, '../Frontend');
app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});


app.post('/users', async (req, res) => {
    
    const data  = {
        ...req.body
    };

    console.log(data)
        await sendUniqueId(data.email, data.uid)
        connection.query('INSERT INTO form_data SET ?', data, (error, rows, fields) => {
            if (error) {
                res.status(400).send(error)
            } else {
                res.status(201).send(rows)
            }
        });      
})

app.get('/users/:id', (req, res) => {
    connection.query('SELECT * FROM form_data WHERE uid=?',[req.params.id], (err, rows, fields) => {
        if(!err) {
            
            res.status(200).send(rows)
        } else {
            console.log(err)
        }
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})