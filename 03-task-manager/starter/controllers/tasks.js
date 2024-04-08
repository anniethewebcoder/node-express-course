const Task = require('./../models/Task')

const getAllTasks = (req, res) => {
    res.send('GET ALL TASKS')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        task
    })

}

const getTask = (req, res) => {
    res.json({
        id: req.params.id
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