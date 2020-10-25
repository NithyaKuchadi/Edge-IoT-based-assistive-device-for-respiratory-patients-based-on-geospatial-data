let mysql = require('promise-mysql');

module.exports = async () => {
    try {
        let pool = mysql.createPool({
            connectionLimit: 3,
            host: 'database-asthma.chopwqznfm2g.us-west-1.rds.amazonaws.com',
            user: 'admin',
            password: 'Harrypotter2990*',
            database: "Asthma"
        });
        if (pool) 
        {
        let con = pool.getConnection();
        return con;
        }
    } catch (ex) {
        throw ex;
    }
}