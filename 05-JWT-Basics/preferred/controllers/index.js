const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const logon = async(req, res) => {
    const {
        name,
        password
    } = req.body

    if(!name || !password) {
        throw new BadRequestError('Please provide name and password')
    }

    const id = new Date().getDate()

    const token = jwt.sign({
        id,
        name
    }, process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    )

    res.status(200).json({
        msg: 'user logged on',
        token
    })
}

const hello = async(req, res) => {

    const villagers = [
        "Alex",
        "Elliott",
        "Harvey",
        "Sam",
        "Sebastian",
        "Shane",
        "Abigail",
        "Emily",
        "Haley",
        "Leah",
        "Maru",
        "Penny"
    ]

    const luckyNumber = Math.floor(Math.random()*12)
    const villager = villagers[luckyNumber]

    res.status(200).json({
        msg: `Hello, ${req.user.name}`,
        secret: `Your love match is ${villager}. Let's go get a bouquet!`,
        img: `${villager}.png`
    })
}

module.exports = {
    logon,
    hello
}