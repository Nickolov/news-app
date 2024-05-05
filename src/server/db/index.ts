import postgres from 'postgres';
import process from 'node:process';

const sql = postgres(process.env.DB_CONNECTION_STRING);

export default sql;