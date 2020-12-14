

module.exports = {
    'MYSQL': {
        host: 'localhost',
        user: 'root',
        database: 'Customer_Repository', //schema name
        password: 'omni1621',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    'PSQL': {
        user: 'shashank',
        host: 'localhost',
        database: 'user_repository',
        password: 'password',
        port: 5432,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    },
    'MSSQL': {},
    'MONGO': {}
}