const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')

require('./db/connect')
require('dotenv').config()

const notFound = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandleMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
