import pkg from 'pg';
import { AWS_CONNECTION_STRING } from '../config.js'

const { Pool } = pkg;

const pool = new Pool({
  host: AWS_CONNECTION_STRING['host'],
  port: AWS_CONNECTION_STRING['port'],
  user: AWS_CONNECTION_STRING['user'],
  password: AWS_CONNECTION_STRING['password'],
  database: AWS_CONNECTION_STRING['database'],
});
export const getInWardQuery = async function(){
    const client = await pool.connect();
    try {
        const res = await client.query("select $1", [20]);
        return res;
    } catch (error) {
        throw error;
    }

}