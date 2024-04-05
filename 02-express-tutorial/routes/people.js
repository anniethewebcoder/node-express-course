const express = require('express')
const router = express.Router()
const app = express()

app.use('/api/v1/people', peopleRouter)

module.exports = router