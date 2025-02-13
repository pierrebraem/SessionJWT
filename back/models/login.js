const { Pool } = require("pg");
const pool = new Pool();

const Login = {
    login: (user, callback) => {
        const query = "SELECT * FROM users WHERE username = $1";
        pool.query(
            query,
            [user.username],
            function (err, result) {
                if(err) {
                    return callback(err, null);
                }
                return callback(null, result.rows[0]);
            }
        ) 
    }
}

module.exports = Login;