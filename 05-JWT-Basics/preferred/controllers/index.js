const jwt = require('jsonwebtoken')

const logon = async(req, res) => {
    const {
        name,
        password
    } = req.body

    if(!name || !password) {
        console.log('Please provide email and password')
    }

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

    const luckyNumber = Math.floor(Math.random()*11)
    console.log(luckyNumber)

    res.status(200).json({
        msg: `Hello, ${req.user.name}`,
        secret: `Here is your marriage candidate ${villager}`
    })
}

module.exports = {
    logon,
    hello
}