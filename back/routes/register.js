const express = require("express");
const router = express.Router();
const Register = require("../models/register");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 12, async (err, hash) => {
        if(err) {
            console.error(err);
        }

        Register.register({
            username: username,
            password: hash
        },
        (err, user) => {
            if(err){
                return res.json({
                    err: err.message
                });
            }

            return res.json({
                message: "OK"
            });
        });
    })
});

module.exports = router;