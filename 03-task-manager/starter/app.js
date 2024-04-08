const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>Task Manager App</h1>`)
})

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const port = 3000
app.listen(port, console.log(`Server listening on port ${port}...`))