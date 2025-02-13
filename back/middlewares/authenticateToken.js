const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if(!token){
        res.status(401).json({ message: "Authorization headers missing" });
        return;
    }

    jwt.verify(token, "fisdijfze", (err, user) => {
        if(err){
            res.status(403).json({ message: "Access Denied" });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;