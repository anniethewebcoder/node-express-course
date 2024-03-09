const { writeFile, readFile } = require('fs').promises

const line_one = 'Alex loves Complete Breakfast\n'
const line_two = 'Alex also loves Salmon Dinner\n'
const line_three = 'You\'ll know if he loves it when he say, "Hey, Awesome! I love this stuff!"\n'

writeFile('temp.txt', line_one, { flag: 'a'})
    .then((res) => {
        writeFile('temp.txt', line_two, { flag: 'a'})
        console.log(res)
    })
    .then((res) => {
        writeFile('temp.txt', line_three, { flag: 'a'})
        console.log(res)
    })
    .catch((err) => console.log(err))
