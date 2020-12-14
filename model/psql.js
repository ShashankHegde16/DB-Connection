const { Pool } = require('pg');
const { PSQL } = require('../config/dbconfig');

let psqlInstance, pool;

module.exports = class pssql {

    constructor() { }
    /**
     * if pool doesnt exists create instance and pool
     */
    async getInstance() {
        try {
            if (!pool) {
                psqlInstance = new pssql;
                pool = new Pool(PSQL);
                console.log('Connection has been established to Postgres');
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
        return psqlInstance;

    }
    /**
     * This method will create the pool
     */
    async init() {
        try {
            await new Pool(dbConfig);
            console.log('Postgres connection established...');
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }

    /**
     * 
     * @param {*} text {Query to be ran}
     * @param {*} params  {array of parameters to pass in query}
     */

    async execute(text, params = []) {
        const client = await pool.connect();

        try {
            let query = {
                text: text
            }
            if (params.length > 0)
                query.values = params
            const response = await client.query(query);
            return response.rows
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            if (client)
                client.release();
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






