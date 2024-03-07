const { writeFile, readFile } = require('fs').promises

const line_one = 'Alex loves Complete Breakfast'
const line_two = 'Alex also loves Salmon Dinner'
const line_three = 'You\'ll know if he loves it when he say, "Hey, Awesome! I love this stuff!"'

writeFile('temp.txt', `${line_one}\n${line_two}\n${line_three}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
