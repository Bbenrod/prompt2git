const express = require("express");
const router = express.Router();
const controller = require("./translateController");

router.post("/text", textToCommand);
router.post("/command", commandToText);

function textToCommand(req, res, next) {
    controller
        .textToCommand(req.body.text)
        .then((user) =>
            res.status(200).json({
                message: "Request done successfully",
                body: user,
            })
        )
        .catch(next);
}
function commandToText(req, res, next) {
    controller
        .commandToText(req.body.command)
        .then((user) =>
            res.status(200).json({
                message: "Request done successfully",
                body: user,
            })
        )
        .catch(next);
}

module.exports = router;
