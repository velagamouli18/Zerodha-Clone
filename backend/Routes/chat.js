const express = require("express");

const router = express.Router();

const { chat } = require("../Controllers/chatController");

const authRequired = require("../Middlewares/AuthRequired");

router.post("/", authRequired, chat);

module.exports = router;