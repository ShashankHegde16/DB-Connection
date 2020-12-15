

module.exports = {
    'MYSQL': {
        host: process.env.DBHOST,
        user: process.env.MYSQLUSR,
        database: process.env.MYSQLSCHEMA, //schema name
        password: process.env.MYSQLPASSW,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    'PSQL': {
        user: process.env.PSSQLUSR,
        host: process.env.DBHOST,
        database: process.env.PSSQLSCHEMA,
        password: process.env.PSSQLPASSW,
        port: 5432,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    },
    'MSSQL': {},
    'MONGO': {}
}