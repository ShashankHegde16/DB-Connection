
const pssql = require('../model/psql');
const mysql = require('../model/mysql');

function inputlistener(input) {
    switch (input) {
        case '1\n': {
            new pssql().getInstance().then((instance) => {
                //establish psql connection
            }).catch(err => {
                console.log('error in esatblishing connection to PSQL');
            });
            return;
        }
        case '2\n': {
            new mysql().getInstance().then((instance) => {
                //establish mysql connection
            }).catch(err => {
                console.log('error in esatblishing connection to PSQL');
            });
            return;
        }
        case 'exit\n': process.exit();
        default:
            return;
    }
}

module.exports = inputlistener;