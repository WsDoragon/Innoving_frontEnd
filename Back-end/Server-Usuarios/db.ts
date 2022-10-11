import mysql from 'mysql2/promise'

//const mysql = require('mysql2/promise');
import { config } from './config'
//const config = require('./config');

async function query(sql:string, params:string) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}