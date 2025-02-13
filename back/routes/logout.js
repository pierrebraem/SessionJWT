const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.session.destroy();
    res.clearCookie('jwt');
    res.json({ message: "Déconnecté "});
});

module.exports = router;