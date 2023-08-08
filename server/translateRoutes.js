const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
    res.send({ message: "Route working" });
});

module.exports = router;
