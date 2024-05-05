import  sql from 'server/db';

export default (() => {
    return sql`SELECT * FROM demo;`;
})