const express = require('express')
const router = express.Router()

const {
    logon,
    hello
} = require('../controllers')

const authenticationMiddleware = require('../middleware/authentication')

router.route('/hello').get(authenticationMiddleware, hello)
router.route('/logon').post(logon)

module.exports = router