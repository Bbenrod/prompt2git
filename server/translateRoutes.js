const express = require("express");
const router = express.Router();
const controller = require("./translateController");

router.use("/", get);

function get(req, res, next) {
    controller
        .get()
        .then((user) =>
            res.status(200).json({
                message: "Request done successfully",
                body: user,
            })
        )
        .catch(next);
}

module.exports = router;
