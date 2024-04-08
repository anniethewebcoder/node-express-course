require('./db/connect')

const express = require('express')
const app = express()
const tasksRouter = require('./routes/tasks')
const { getAllTasks, getTask } = require('./controllers/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Task Manager App</h1>`)
})

app.use('/api/v1/tasks', tasksRouter)

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
