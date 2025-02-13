const express = require("express");
const router = express.Router();
const Login = require("../models/login");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (username, is_admin) => {
    return jwt.sign({username, is_admin}, "fisdijfze", {
        expiresIn: maxAge
    });
};

router.post("/", (req, res) => {
    const { username, password } = req.body;

    Login.login({
        username: username
    },
    async (err, user) => {
        if(err){
            return res.json({
                err: err.message
            });
        }
        if(await bcrypt.compare(password, user.password)){
            const token = createToken(username, user.is_admin);

            res.cookie("jwt", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000
            });

            req.session.token = token;

            return res.json({
                user: {
                    username: username,
                    isAdmin: user.is_admin
                }
            });
        }
    }
    )
});

module.exports = router;