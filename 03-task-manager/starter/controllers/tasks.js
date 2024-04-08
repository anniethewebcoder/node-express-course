const express = require('express')

const getAllTasks = (req, res) => {
    res.send('GET ALL TASKS')
}

const createTask = (req, res) => {
    res.send('CREATE TASK')
}

const getTask = (req, res) => {
    res.send('GET A TASK')
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