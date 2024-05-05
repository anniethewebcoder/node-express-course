const jwt = require('jsonwebtoken')

const authenticationMiddleware = async(req, res, next) => {
    const authenticationHeader = req.headers.authorization

    const token = authenticationHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const { name } = decoded

        req.user = { name }

        console.log(req.user)
    } catch(error) {
        console.log(error)
    }
}

module.exports = authenticationMiddleware