const mysql = require('mysql');
const { MYSQL } = require('../config/dbconfig');

let pool, instance;
module.exports = class Mysql {
    constructor() { }

    async getInstance() {
        try {
            if (!instance) {
                instance = new Mysql;
                pool = new mysql.createPool(MYSQL);
                console.log('Connection has been established to MYSQL');
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
        return instance;
    }

    async init() {
        try {
            await new mysql.createPool(MYSQL);
            console.log('Postgres connection established...');
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    async execute(sql, params = []) {
        const conn = await pool.getConnection();
        try {
            let query = {
                sql: sql
            }
            if (params.length > 0) {
                query['values'] = params;
            }
            const response = await conn.query(query);
            return response;
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            if (conn)
                conn.release();
        }
    }
    async close() {
        console.log('Stopping Database....')
        try {
            await pool.end()
        } catch (err) {
            console.log('Error while closing Pool: ', err);
            throw err;
        }
    }
}