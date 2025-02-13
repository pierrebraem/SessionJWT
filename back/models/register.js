const { Pool } = require("pg");
const pool = new Pool();

const Register = {
    register: (user, callback) => {
        const query = "INSERT INTO users (username, password) VALUES ($1, $2)";
        pool.query(
            query,
            [user.username, user.password],
            function (err, result) {
                if (err) {
                    return callback(err, null);
                }
                callback(null, result.rows[0]);
            }
        )
    }
}

module.exports = Register;