
const { Pool } = require('pg');
require('dotenv').config();  

class PostgresDB {
  constructor() {
    this.pool = new Pool({
      user: process.env.PG_USER,         
      host: process.env.PG_HOST,         
      database: process.env.PG_DB_NAME,  
      password: process.env.PG_PASSWORD, 
      port: process.env.PG_PORT,         
    });

    this.pool.connect((err) => {
      if (err) {
        console.error('Error connecting to PostgreSQL database', err.stack);
      } else {
        console.log('Successfully connected to PostgreSQL database');
      }
    });
  }

  query(sql, params) {
    return this.pool.query(sql, params);
  }
}

const pgDB= new PostgresDB()
module.exports=pgDB