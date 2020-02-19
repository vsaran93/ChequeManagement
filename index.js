const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
    res.send('welcome to express world');
});

app.listen(port, () => {
    console.log('app is running on ', port)
})