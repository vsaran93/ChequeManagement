const express = require('express');
const app = express();
const port = 3005;

const dbConnection = require('./connection/dbConnection');

//controllers
const chequeDetailEndpoint = require('./controllers/chequeDetail');


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

try {
    dbConnection.authenticate();
    console.log('authenticated successfully !');
}
catch (err) {
    console.error(err);
}

app.get('/', (req, res) => {
    res.send('welcome to express world');
});


app.post('/addChequeDetail', chequeDetailEndpoint.addCheckDetail);

app.listen(port, () => {
    console.log('app is running on ', port)
})