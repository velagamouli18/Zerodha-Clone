// const { Signup } = require("../Controllers/AuthController");
// const router = require("express").Router();

// router.post("/signup", Signup);

// module.exports = router;

const { Signup, Login } = require('../Controllers/AuthController')
const { userVerification } = require('../Middlewares/Authmiddleware')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)

module.exports = router