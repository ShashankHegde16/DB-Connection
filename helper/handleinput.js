const listener = require('./dbconnector');
const validInputs = ['1', '2', 'exit'];
function prompUser() {
    const standard_input = process.stdin;
    standard_input.setEncoding('utf-8');

    // Prompt user to input data in console.
    console.log("Please opt one of db to connect with.\n1.PSQL\n2.MYSQL\nEnter any number above to connect to database\n***Enter exit to stop the server***");

    // When user input data and click enter key.
    standard_input.on('data', function (data) {

        if (data.indexOf(validInputs)) {
            listener(data);
        }
        else {
            // Program exit.
            console.log("Invalid input!.");
            process.exit();
        }

    });
}
module.exports = prompUser;