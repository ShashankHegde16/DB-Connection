'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const commandhandler = require('./helper/handleinput');
const app = express();
const port = 3000;


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


app.listen(port, () => {
    console.log('Server started running on ' + port);
    commandhandler();
})

function handle(signal) {
    console.log(`Received ${signal}`);
    process.exit(0);
}

process.on('SIGINT', handle);

