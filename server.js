'use strict';

const psql = require('./model/psql');
const express = require('express')
const bodyParser = require('body-parser');
const pssql = require('./model/psql');
const app = express();
const port = 3000;


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

new pssql().getInstance().then((instance) => {
    app.listen(port, () => {
        console.log('Server started running on ' + port);
    })
})

