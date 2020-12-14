'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const pssql = require('./model/psql');
const { PSQL } = require('./config/dbconfig');
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



function handle(signal) {
    console.log(`Received ${signal}`);
    new pssql().getInstance().then((instance) => {
        instance.close();
        process.exit(0);
    })
}

process.on('SIGINT', handle);
process.on('SIGKILL', handle);

