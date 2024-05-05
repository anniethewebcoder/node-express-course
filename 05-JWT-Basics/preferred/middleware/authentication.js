const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authenticationMiddleware = async(req, res, next) => {
    const authenticationHeader = req.headers.authorization

    if(!authenticationHeader || !authenticationHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided')
    }

    const token = authenticationHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const { id, name } = decoded
        req.user = { id, name }

        next()
    } catch(error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = authenticationMiddleware