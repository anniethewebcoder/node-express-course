const jwt = require('jsonwebtoken')

const logon = async(req, res) => {
    const {
        name,
        password
    } = req.body

    
    console.log(name, password)

    res.status(200).send(req.body)
}

const hello = async(req, res) => {
    res.status(200).send("Hello")
}

module.exports = {
    logon,
    hello
}