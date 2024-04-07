const express = require('express')
const router = express.Router()

const {
    getPeople,
    getPerson,
    addPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)

router.route('/').get(getPeople).post(addPerson)
router.route('/:id').get(getPerson).put(updatePerson).delete(deletePerson)

module.exports = router
