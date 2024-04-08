const getAllTasks = (req, res) => {
    res.send('GET ALL TASKS')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({
        name: req.params
    })
}

const updateTask = (req, res) => {
    res.send('UPDATE A TASK')
}

const deleteTask = (req, res) => {
    res.send('DELETE A TASK')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}