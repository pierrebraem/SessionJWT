// Page auquel un utilisateur admin et un utilisateur non-admin

const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");

router.get('/', authenticateToken, (req, res) => {
    return res.json({
        username: req.user.username,
        is_admin: req.user.is_admin
    })
});

module.exports = router;