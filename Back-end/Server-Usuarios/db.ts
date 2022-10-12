//import mysql from 'mysql2/promise'
import mysql from 'mysql2'

//const mysql = require('mysql2/promise');
import { config } from './config'
//const config = require('./config');

async function query(sql:string, params:string) {
  const pool = mysql.createPool(config.db)
  const promisePool = pool.promise();
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await promisePool.execute(sql, params);

  return results;
}

module.exports = {
  query
}