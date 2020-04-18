const express = require('express');
const app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");

    next();
});

const bodyParser = require('body-parser');

//Importing Routes
const getsRoutes = require('./routes/get');

app.use('/get', getsRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.listen(3000);
